import { request } from "./request.js";

const ingredients = (meal) => {
  const ingredientList = [];
  for (let index = 1; index <= 20; index++) {
    const ingredient = meal[`strIngredient${index}`];
    const measure = meal[`strMeasure${index}`];
    if (ingredient !== "" && ingredient !== null) {
      ingredientList.push({
        ingredient: ingredient,
        measure: measure,
        urlName: ingredient.replaceAll(" ", "_"),
      });
    }
  }
  return ingredientList;
};

const cleanInstructions = (rawInstructions) => {
  const instructions = rawInstructions.split(".");
  const cleanedInstructions = instructions.map((instruction) => {
    const cleanInstruction = instruction.replace(/[\r\n]/g, " ");
    return cleanInstruction.trim();
  });
  return cleanedInstructions;
};

const cleanedMeal = (meal) => ({
  id: meal.idMeal,
  meal: meal.strMeal,
  category: meal.strCategory,
  area: meal.strArea,
  instructions: cleanInstructions(meal.strInstructions),
  thumbnail: meal.strMealThumb,
  ingredients: ingredients(meal),
});

const filteredMeal = (meal) => ({
  id: meal.idMeal,
  meal: meal.strMeal,
  thumbnail: meal.strMealThumb,
});

const selectMealByIngredients = (arrayMeals) => {
  const mergedMeals = [];
  arrayMeals.map((mealArray) => mergedMeals.push(...mealArray));

  const selected = new Set(
    mergedMeals.filter((meal) => {
      const freq = mergedMeals.filter(
        (theMeal) => theMeal.idMeal === meal.idMeal
      ).length;
      return freq === arrayMeals.length;
    })
  );
  const meals = Array.from(selected);
  return filteredMeals(meals);
};

const cleanMeals = (meals) => meals.map((meal) => cleanedMeal(meal));
const filteredMeals = (meals) => meals.map((meal) => filteredMeal(meal));

export const getFilteredMeal = async (filter, filterValue) => {
  try {
    const response = await request({
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${filterValue}`,
      method: "get",
    });
    if (response.statusCode != 200) {
      throw new Error(`Gagal mengambil data, status code: ${statusCode}`);
    }

    const { meals } = response.data;
    return filteredMeals(meals);
  } catch (err) {
    console.error(err);
  }
};

export const getMealsByIngredients = async (ingredients) => {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
    const setupReq = ingredients.map((ingredient) => {
      const formatedIngredient = ingredient.replaceAll(" ", "_");
      return url + formatedIngredient;
    });
    const meals = [];
    await Promise.all(
      setupReq.map((reqUrl) => request({ url: reqUrl, method: "get" }))
    ).then((res) => {
      res.map((mealsResponse) => {
        const mealArray = mealsResponse.data.meals;
        if (mealArray) meals.push(mealArray);
      });
    });

    if (meals.length === 0) return meals;
    else {
      const selectedMeals = selectMealByIngredients(meals);
      return selectedMeals;
    }
  } catch (err) {
    throw new Error("Gagal Mengambil Data: ", err);
  }
};

export const getMeals = async (filter, letter) => {
  try {
    const response = await request({
      url: `https://www.themealdb.com/api/json/v1/1/search.php?${filter}=${letter}`,
      method: "get",
    });
    if (response.statusCode != 200) {
      throw new Error(`Gagal mengambil data, status code: ${statusCode}`);
    }

    const { meals } = response.data;
    return cleanMeals(meals);
  } catch (err) {
    console.error(err);
  }
};
