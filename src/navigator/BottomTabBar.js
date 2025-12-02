import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../tab/home";
import { HomeIcon } from "lucide-react-native";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#1e293b" },
        tabBarIcon: ({ focused }) => {
          let Icon = route.name === "Home" ? HomeIcon : HomeIcon;
          return <Icon />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
