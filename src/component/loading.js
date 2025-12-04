import React from "react";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const Loading = ({ isLoading, children }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Modal transparent={true} visible={isLoading}>
      <View style={styles.container}>
        <View
          style={[
            styles.loadingContainer,
            { width: width * 0.8, height: height * 0.2 },
          ]}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, color: "#f1f5f9" }}>{children}</Text>
          </View>
          <View>
            <ActivityIndicator color={"#F97316"} size={"large"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loadingContainer: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
  },
});

export default Loading;
