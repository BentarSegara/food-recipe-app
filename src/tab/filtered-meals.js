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
import Pagination from "../component/pagination";
import { Menu, Search, Utensils } from "lucide-react-native";
import FoodCard from "../component/food-card";
import { getFilteredMeal, getMeals } from "../request/request-meal";
import Header from "../component/header";

const FilteredMeals = ({ navigation, route }) => {
  const { filter, filterValue } = route.params;
  const { width, height } = useWindowDimensions();
  const [currIndex, setCurrIndex] = useState([0, 10]);

  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [viewedList, setViewList] = useState([]);

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

  useEffect(() => {
    const getTheMeals = async () => {
      setIsLoading(true);
      try {
        const mealList = await getFilteredMeal(filter, filterValue);
        setMeals(mealList);
        setViewList(mealList.slice(...currIndex));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTheMeals();
  }, []);

  const paginateSymbol = [...Array(Math.ceil(meals.length / 10)).keys()].map(
    (idx) => idx + 1
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF7ED" }}>
      <StatusBar hidden={true} />
      <Header navigation={navigation} />
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
          data={viewedList}
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

export default FilteredMeals;
