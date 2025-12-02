import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FilteredMeals from "../tab/search-meal";
import Detail from "../tab/detail";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="DetailPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DetailPage" component={Detail} />
      <Stack.Screen name="FilteredMeals" component={FilteredMeals} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
