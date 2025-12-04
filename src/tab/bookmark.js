import { Menu, Search, Utensils } from "lucide-react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import FoodCard from "../component/food-card";
import { getMeals } from "../request/request-meal";
import Pagination from "../component/pagination";
import { connectDB, selectFavMeal } from "../storage/sqlite";
import Loading from "../component/loading";
import { useFocusEffect } from "@react-navigation/native";

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
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loading isLoading={isLoading}>Loading Favorite Meals</Loading>
      <View
        style={{
          height: height * 0.16,
          justifyContent: "flex-end",
          backgroundColor: "#F97316",
        }}
      >
        <View
          style={{
            width: width * 0.8,
            paddingHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Pressable onPress={() => navigation.openDrawer()}>
              <Menu color={"#FFFFFF"} size={25} />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              alignItems: "center",
            }}
          >
            <Utensils color={"#FFFFFF"} size={25} />
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}
            >
              {"  "}
              What's in My Fridge?
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.8,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginVertical: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Search color={"#FB923C"} />
          <TextInput
            placeholder="Search by the ingredient ..."
            placeholderTextColor={"#9CA3AF"}
            keyboardType="web-search"
          />
        </View>
      </View>
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
