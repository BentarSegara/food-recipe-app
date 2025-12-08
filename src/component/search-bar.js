import { useNavigation } from "@react-navigation/native";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

const SearchBar = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const { width } = useWindowDimensions();
  const onSearch = () => {
    const ingredients = searchText.replaceAll(/,\s+/g, ",");
    navigation.navigate("Detail", {
      screen: "SearchMeals",
      params: {
        ingredients: ingredients.split(","),
      },
    });
    setSearchText("");
  };

  return (
    <View style={[styles.searchBar, { width: width * 0.8 }]}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={searchText}
          onChangeText={(newText) => setSearchText(newText)}
          placeholder="Search by the ingredient ..."
          placeholderTextColor={"#9CA3AF"}
          keyboardType="web-search"
        />
      </View>
      <Pressable style={styles.searchButton} onPress={onSearch}>
        <Search color={"#FFFFFF"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
  },
  textInputContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    width: "15%",
    paddingVertical: 13,
    alignItems: "center",
    backgroundColor: "#FB923C",
  },
});

export default SearchBar;
