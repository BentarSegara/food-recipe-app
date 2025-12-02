import { useNavigation } from "@react-navigation/native";
import { MapPin, Tag } from "lucide-react-native";
import React, { useEffect } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const FoodCard = ({ food }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        width: width * 0.45,
        height: height * 0.3,
        marginRight: 8,
        marginBottom: 15,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          flex: 1.5,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#FFEDD5",
        }}
      >
        <Image style={{ flex: 1 }} source={{ uri: food.thumbnail }} />
      </View>
      <View style={{ flex: 1, padding: 5 }}>
        <View>
          <Text
            numberOfLines={1}
            style={{ fontWeight: "bold", color: "#1F2937" }}
          >
            {food.meal}
          </Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Tag size={12} color={"#FB923C"} />
            <Text style={{ fontSize: 12 }}> {food.category}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MapPin size={12} color={"#FB923C"} />
            <Text style={{ fontSize: 12 }}> {food.area}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { meal: food })}
          style={{
            padding: 5,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F97316",
          }}
        >
          <Text style={{ fontWeight: "500", color: "#FFFFFF" }}>
            View Recipe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;
