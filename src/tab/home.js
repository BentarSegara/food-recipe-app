import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Flame,
  MapPin,
  Menu,
  Search,
  Sidebar,
  Tag,
  Utensils,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import FoodCard from "../component/food-card";
import { getMeals } from "../request/request-meal";
import PageButton from "../component/page-button";
import Pagination from "../component/pagination";
import { useNavigation } from "@react-navigation/native";

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
        const mealList = await getMeals(alphabet[currIndex]);
        setMeals(mealList);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTheMeals();
  }, [currIndex]);
  // const meals = [
  //   {
  //     id: "52768",
  //     meal: "Apple Frangipan Tart",
  //     category: "Dessert",
  //     area: "British",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
  //   },
  //   {
  //     id: "52893",
  //     meal: "Apple & Blackberry Crumble",
  //     category: "Dessert",
  //     area: "British",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
  //   },
  //   {
  //     id: "53049",
  //     meal: "Apam balik",
  //     category: "Dessert",
  //     area: "Malaysian",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
  //   },
  //   {
  //     id: "53050",
  //     meal: "Ayam Percik",
  //     category: "Chicken",
  //     area: "Malaysian",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  //   },
  //   {
  //     id: "53051",
  //     meal: "Ayam Percik",
  //     category: "Chicken",
  //     area: "Malaysian",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  //   },
  //   {
  //     id: "53052",
  //     meal: "Ayam Percik",
  //     category: "Chicken",
  //     area: "Malaysian",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  //   },
  //   {
  //     id: "53053",
  //     meal: "Ayam Percik",
  //     category: "Chicken",
  //     area: "Malaysian",
  //     thumbnail:
  //       "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  //   },
  // ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar hidden={true} />
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
      <Modal transparent={true} visible={isLoading}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              width: width * 0.8,
              height: height * 0.2,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1e293b",
            }}
          >
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 16, color: "#f1f5f9" }}>
                Loading Meals
              </Text>
            </View>
            <View>
              <ActivityIndicator color={"#F97316"} size={"large"} />
            </View>
          </View>
        </View>
      </Modal>

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
