import { Menu, Search, Utensils } from "lucide-react-native";
import React, { useEffect, useState } from "react";
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
import Loading from "../component/loading";

const Home = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [currIndex, setCurrIndex] = useState(0);
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

  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);

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
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar hidden={true} />
      <Loading isLoading={isLoading}>Loading Meals</Loading>
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
