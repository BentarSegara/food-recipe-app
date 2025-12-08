import { Menu, Search, Utensils } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import SearchBar from "./search-bar";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  return (
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
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>
            {"  "}
            What's in My Fridge?
          </Text>
        </View>
      </View>
      <SearchBar />
    </View>
  );
};

export default Header;
