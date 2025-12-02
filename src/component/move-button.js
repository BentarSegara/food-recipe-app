import { ChevronLeft, ChevronRight } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const MoveButton = ({ move, onPress }) => {
  const { width, height } = useWindowDimensions();
  const Icon = move === "next" ? ChevronRight : ChevronLeft;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          width: width * 0.1,
          height: height * 0.05,
          borderWidth: pressed ? 0 : 0.5,
          backgroundColor: pressed ? "#F97316" : "#FFFFFF",
        },
      ]}
      onPress={onPress}
    >
      {({ pressed }) => <Icon color={pressed ? "#FFFFFF" : "#1F2937"} />}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MoveButton;
