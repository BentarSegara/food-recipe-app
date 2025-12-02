import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../tab/home";
import BookMark from "../tab/bookmark";
import About from "../tab/about";
import {
  BookmarkPlus,
  BookmarkPlusIcon,
  HomeIcon,
  InfoIcon,
} from "lucide-react-native";
import { Text, useWindowDimensions, View } from "react-native";
import CustomDrawer from "../component/custom-drawer";

const Drawer = createDrawerNavigator();
const SideBar = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ route }) => ({
        drawerStyle: { width: width * 0.7, borderBottomRightRadius: 0 },
        drawerItemStyle: { borderRadius: 10 },
        headerShown: false,
        drawerIcon: ({ focused }) => {
          const Icon =
            route.name === "Home"
              ? HomeIcon
              : route.name === "BookMark"
              ? BookmarkPlusIcon
              : InfoIcon;
          return <Icon color={focused ? "#F97316" : "#1F2937"} />;
        },
        drawerActiveBackgroundColor: "#FFEDD5",
        drawerActiveTintColor: "#F97316",
        drawerInactiveTintColor: "#1F2937",
      })}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="BookMark" component={BookMark} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default SideBar;
