import React, { useState } from "react";
import { View } from "react-native";
import PageButton from "./page-button";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
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
      style={{
        width: "100%",
        flexDirection: "row",
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <MoveButton
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
      <PageButton
        active={activeButtons[1]}
        onPress={() => {
          switchActive("right");
          onMoveNext();
        }}
      >
        {data[currIndex + 1]}
      </PageButton>
      <MoveButton
        onPress={() => {
          move("next");
          onMoveNext();
        }}
        move={"next"}
      />
    </View>
  );
};

export default Pagination;
