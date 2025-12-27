import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PageButton from "./page-button";
import MoveButton from "./move-button";

const Pagination = ({ style, data, onMoveNext, onMoveBack }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [activeButtons, setActiveButtons] = useState([true, false]);

  const switchActive = (strSwitch) =>
    strSwitch === "right"
      ? setActiveButtons([false, true])
      : setActiveButtons([true, false]);

  const move = (strMove) => {
    if (strMove === "next") {
      switchActive("right");
      if (activeButtons[1] && currIndex + 1 < data.length - 1) {
        setCurrIndex(currIndex + 1);
      }
    } else {
      switchActive("left");
      if (activeButtons[0] && currIndex > 0) {
        setCurrIndex(currIndex - 1);
      }
    }
  };

  return (
    <View
      style={styles.container}
    >
      <MoveButton
        disabled={data.length > 1 ? false : true}
        onPress={() => {
          move("previous");
          onMoveBack();
        }}
        move={"previous"}
      />
      <PageButton
        active={activeButtons[0]}
        onPress={() => {
          switchActive("left");
          onMoveBack();
        }}
      >
        {data[currIndex]}
      </PageButton>
      {data.length > 1 && (
        <PageButton
          active={activeButtons[1]}
          onPress={() => {
            switchActive("right");
            onMoveNext();
          }}
        >
          {data[currIndex + 1]}
        </PageButton>
      )}
      <MoveButton
        disabled={data.length > 1 ? false : true}
        onPress={() => {
          move("next");
          onMoveNext();
        }}
        move={"next"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default Pagination;
