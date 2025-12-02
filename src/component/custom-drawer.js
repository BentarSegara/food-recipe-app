import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { X } from "lucide-react-native";
import React from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";

const CustomDrawer = (props) => {
  const { height } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: height * 0.1,
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          backgroundColor: "#F97316",
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFFFFF" }}>
            Menu
          </Text>
        </View>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <X color={"#FFFFFF"} size={30} />
        </Pressable>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 10 }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          padding: 25,
          alignItems: "center",
          borderTopWidth: 0.5,
          borderColor: "#6B7280",
          //   backgroundColor: "red",
        }}
      >
        <Text style={{ fontWeight: "400", color: "#6B7280" }}>
          What's in My Fridge? v.10
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
