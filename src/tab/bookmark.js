import { Menu, Search, Utensils } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import FoodCard from "../component/food-card";
import Pagination from "../component/pagination";
import { connectDB, selectFavMeal } from "../storage/sqlite";
import Loading from "../component/loading";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../component/header";

const BookMark = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [currIndex, setCurrIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  const decrement = (incNum) => currIndex.map((x) => x - incNum);
  const increment = (incNum) => currIndex.map((x) => x + incNum);

  const previousPage = () => {
    if (currIndex[0] > 0) {
      setCurrIndex(decrement(10));
      setViewList(meals.slice(...decrement(10)));
    }
  };

  const nextPage = () => {
    if (currIndex[1] < meals.length) {
      setCurrIndex(increment(10));
      setViewList(meals.slice(...increment(10)));
    }
  };

  const cleanMeal = (meal) => ({
    ...meal,
    ["instructions"]: meal.instructions.split("."),
    ["ingredients"]: JSON.parse(meal.ingredients),
  });

  const cleanedMeals = (meals) => meals.map((meal) => cleanMeal(meal));

  const paginateSymbol = [...Array(Math.ceil(meals.length / 10)).keys()].map(
    (idx) => idx + 1
  );

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const connectingToDB = async () => {
        setIsLoading(true);
        try {
          const db = await connectDB();
          const favmeals = await selectFavMeal(db);
          setMeals(cleanedMeals(favmeals));
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      connectingToDB();
      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF7ED" }}>
      <Loading isLoading={isLoading}>Loading Favorite Meals</Loading>
      <Header navigation={navigation} />
      <View style={{ flex: 1, padding: 15 }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1F2937" }}>
            Favorite Meals
          </Text>
        </View>

        <FlatList
          numColumns={2}
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FoodCard food={item} />}
        />
      </View>
      <Pagination
        data={paginateSymbol}
        onMoveBack={previousPage}
        onMoveNext={nextPage}
      />
    </View>
  );
};

export default BookMark;
