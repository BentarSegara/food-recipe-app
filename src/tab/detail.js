import {
  ArrowLeft,
  BookmarkPlus,
  ChefHat,
  ReceiptText,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { getMeals } from "../request/request-meal";

const Detail = ({ route, navigation }) => {
  const ingThumbBaseURL =
    "https://www.themealdb.com/images/ingredients/{}-small.png";
  const { width, height } = useWindowDimensions();
  const [isFavorite, setFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [meal, setMeal] = useState(route.params.meal);

  useEffect(() => {
    console.log("Meal: ", meal);
    if (Object.keys(meal).length === 3) {
      const getMealDetail = async () => {
        setIsLoading(true);
        try {
          const mealDetail = await getMeals("s", meal.meal);
          setMeal(mealDetail[0]);
          console.log(mealDetail);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      getMealDetail();
    }
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#FFEDD5" }}>
      <View
        style={{
          flexDirection: "row",
          height: height * 0.1,
          padding: 25,
          justifyContent: "flex-start",
          alignItems: "flex-end",
          backgroundColor: "#F97316",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft size={25} color={"#FFFFFF"} />
        </Pressable>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>
            Detail Resep
          </Text>
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
      <ScrollView>
        <ImageBackground
          style={{
            height: height * 0.25,
            backgroundColor: "red",
          }}
          imageStyle={{ flex: 1 }}
          source={{ uri: meal.thumbnail }}
        >
          <View
            style={{
              flex: 1,
              paddingLeft: 15,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text
                  style={{ fontSize: 25, fontWeight: "500", color: "#FFFFFF" }}
                >
                  {meal.meal}
                </Text>
              </View>
              <Pressable onPress={() => setFavorite(!isFavorite)}>
                <BookmarkPlus
                  size={28}
                  color={"#FFFFFF"}
                  fill={isFavorite ? "#F97316" : "rgba(0,0,0,0)"}
                />
              </Pressable>
            </View>
            <View style={{ marginVertical: 15, flexDirection: "row" }}>
              <Pressable
                onPress={() =>
                  navigation.navigate("FilteredMeals", {
                    filter: "c",
                    filterValue: meal.category,
                  })
                }
                style={{
                  width: width * 0.2,
                  marginRight: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                  alignItems: "center",
                  backgroundColor: "#F97316",
                }}
              >
                <Text style={{ color: "#FFFFFF" }}>{meal.category}</Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate("FilteredMeals", {
                    filter: "a",
                    filterValue: meal.area,
                  })
                }
                style={{
                  width: width * 0.25,
                  marginRight: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Text style={{ color: "#1F2937" }}>{meal.area}</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{ marginBottom: 5, padding: 15, backgroundColor: "#FFFFFF" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ReceiptText />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {" "}
              Bahan - Bahan
            </Text>
          </View>
          {meal.ingredients &&
            meal.ingredients.map((item, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: 15,
                  borderBottomWidth: 0.2,
                  borderBottomColor: "#6B7280",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 5,
                    }}
                  >
                    <Image
                      style={{ flex: 1 }}
                      source={{
                        uri: ingThumbBaseURL.replace("{}", item.urlName),
                      }}
                    />
                  </View>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("FilteredMeals", {
                        filter: "i",
                        filterValue: item.ingredient,
                      })
                    }
                  >
                    <Text style={{ fontWeight: "500" }}>{item.ingredient}</Text>
                  </Pressable>
                </View>
                <View>
                  <Text style={{ fontWeight: "bold", color: "#F97316" }}>
                    {item.measure}
                  </Text>
                </View>
              </View>
            ))}
        </View>

        <View style={{ padding: 15, backgroundColor: "#FFFFFF" }}>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ChefHat />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {" "}
              Cara Membuat
            </Text>
          </View>
          {meal.instructions &&
            meal.instructions.map(
              (item, index) =>
                item !== "" && (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>
                      <Text style={{ fontWeight: "bold", color: "#F97316" }}>
                        {index + 1}.
                      </Text>{" "}
                      {item}
                    </Text>
                  </View>
                )
            )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
