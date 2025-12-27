import { Menu, Search, Utensils } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  StyleSheet,
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
      style={[styles.headerContainer, { height: height * 0.16 }]}
    >
      <View
        style={[styles.topRow, { width: width * 0.8 }]}
      >
        <View>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Menu color={"#FFFFFF"} size={25} />
          </Pressable>
        </View>
        <View
          style={styles.titleContainer}
        >
          <Utensils color={"#FFFFFF"} size={25} />
          <Text style={styles.titleText}>
            {"  "}
            What's in My Fridge?
          </Text>
        </View>
      </View>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#F97316",
  },
  topRow: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Header;
