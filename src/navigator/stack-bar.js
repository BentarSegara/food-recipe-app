import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FilteredMeals from "../tab/filtered-meals";
import Detail from "../tab/detail";
import SearchMeals from "../tab/search-meals";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="DetailPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DetailPage" component={Detail} />
      <Stack.Screen name="FilteredMeals" component={FilteredMeals} />
      <Stack.Screen name="SearchMeals" component={SearchMeals} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
