import React from "react";
import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";

const PageButton = ({ active, children, onPress }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable
      style={[
        styles.button,
        {
          width: width * 0.1,
          height: height * 0.05,
          borderWidth: active ? 0 : 0.5,
          backgroundColor: active ? "#F97316" : "#FFFFFF",
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontWeight: "500",
          color: active ? "#FFFFFF" : "#1F2937",
        }}
      >
        {children}
      </Text>
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
export default PageButton;
