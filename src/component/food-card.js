import { useNavigation } from "@react-navigation/native";
import { MapPin, Tag } from "lucide-react-native";
import React, { useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const FoodCard = ({ food }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const attributeCount = Object.keys(food).length;

  const toDetail = () => {
    navigation.navigate("Detail", {
      screen: "DetailPage",
      params: {
        meal: food,
      },
    });
  };

  return (
    <View
      style={[
        styles.cardContainer,
        {
          width: width * 0.45,
          height: height * (attributeCount > 3 ? 0.3 : 0.2),
        },
      ]}
    >
      <Pressable
        style={styles.imageContainer}
        onPress={toDetail}
      >
        <Image style={{ flex: 1 }} source={{ uri: food.thumbnail }} />
      </Pressable>
      <View
        style={styles.contentContainer}
      >
        <View style={{ marginBottom: 5 }}>
          <Text
            numberOfLines={1}
            style={styles.mealTitle}
          >
            {food.meal}
          </Text>
        </View>
        {food.category && food.area && (
          <View style={{ marginBottom: 5 }}>
            <View style={styles.attributeRow}>
              <Tag size={12} color={"#FB923C"} />
              <Text style={{ fontSize: 12 }}> {food.category}</Text>
            </View>
            <View style={styles.attributeRow}>
              <MapPin size={12} color={"#FB923C"} />
              <Text style={{ fontSize: 12 }}> {food.area}</Text>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={toDetail}
          style={styles.viewButton}
        >
          <Text style={styles.viewButtonText}>
            View Recipe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 8,
    marginBottom: 15,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1.5,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFEDD5",
  },
  contentContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  mealTitle: {
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
  },
  attributeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewButton: {
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F97316",
  },
  viewButtonText: {
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default FoodCard;
