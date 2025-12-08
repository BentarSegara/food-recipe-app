import { Menu, Search, Utensils } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
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
import Loading from "../component/loading";
import Header from "../component/header";
import SearchBar from "../component/search-bar";

const Home = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [currIndex, setCurrIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  useEffect(() => {
    const getTheMeals = async () => {
      setIsLoading(true);
      try {
        const mealList = await getMeals("f", alphabet[currIndex]);
        setMeals(mealList);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTheMeals();
  }, [currIndex]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF7ED" }}>
      <StatusBar hidden={true} />
      <Loading isLoading={isLoading}>Loading Meals</Loading>
      <Header />

      <View style={{ flex: 1, padding: 15 }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1F2937" }}>
            List Meals
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
        data={alphabet}
        onMoveBack={() => {
          if (currIndex > 0) setCurrIndex(currIndex - 1);
        }}
        onMoveNext={() => {
          if (currIndex + 1 < alphabet.length - 1) setCurrIndex(currIndex + 1);
        }}
      />
    </View>
  );
};

export default Home;
