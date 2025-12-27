import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Pagination from "../component/pagination";
import { getMealsByIngredients } from "../request/request-meal";
import Header from "../component/header";
import { useFocusEffect } from "@react-navigation/native";
import FoodCard from "../component/food-card";
import { Utensils } from "lucide-react-native";

const SearchMeals = ({ navigation, route }) => {
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

  useFocusEffect(
    useCallback(() => {
      const { ingredients } = route.params;
      console.log(ingredients);
      const getMeals = async (ingredients) => {
        setIsLoading(true);
        try {
          console.log("Mengambil data...");
          const selectedMeals = await getMealsByIngredients(ingredients);
          console.log(selectedMeals.length);
          setMeals(selectedMeals);
          setViewList(selectedMeals);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      getMeals(ingredients);
    }, [route.params])
  );
  const paginateSymbol = [...Array(Math.ceil(meals.length / 10)).keys()].map(
    (idx) => idx + 1
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Header navigation={navigation} />
      <Modal transparent={true} visible={isLoading}>
        <View
          style={styles.modalOverlay}
        >
          <View
            style={[
              styles.modalContent,
              { width: width * 0.8, height: height * 0.2 },
            ]}
          >
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.loadingText}>
                Loading Meals
              </Text>
            </View>
            <View>
              <ActivityIndicator color={"#F97316"} size={"large"} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.contentContainer}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.headerTitle}>
            Meal List According to The Ingredients
          </Text>
        </View>

        {viewedList.length !== 0 ? (
          <FlatList
            numColumns={2}
            data={viewedList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FoodCard food={item} />}
          />
        ) : (
          <View
            style={styles.emptyStateContainer}
          >
            <View>
              <Utensils color={"#FB923C"} size={30} />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.emptyStateText}>
                Meals Not Found
              </Text>
            </View>
            <Pressable
              style={styles.tryAgainButton}
            >
              <Text style={styles.tryAgainButtonText}>
                Try Again
              </Text>
            </Pressable>
          </View>
        )}
      </View>
      <Pagination
        data={paginateSymbol}
        onMoveBack={previousPage}
        onMoveNext={nextPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
  },
  loadingText: {
    fontSize: 16,
    color: "#f1f5f9",
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    fontWeight: "bold",
    color: "#FB923C",
  },
  tryAgainButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#EA580C",
  },
  tryAgainButtonText: {
    fontWeight: "bold",
    color: "#F97316",
  },
});

export default SearchMeals;
