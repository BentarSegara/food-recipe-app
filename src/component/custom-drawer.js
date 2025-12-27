import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { X } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";

const CustomDrawer = (props) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View
        style={[styles.headerContainer, { height: height * 0.1 }]}
      >
        <View>
          <Text style={styles.menuText}>
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
        style={styles.footerContainer}
      >
        <Text style={styles.footerText}>
          What's in My Fridge? v.10
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#F97316",
  },
  menuText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  footerContainer: {
    padding: 25,
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "#6B7280",
  },
  footerText: {
    fontWeight: "400",
    color: "#6B7280",
  },
});

export default CustomDrawer;
