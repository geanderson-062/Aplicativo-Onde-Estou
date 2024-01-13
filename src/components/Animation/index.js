import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const MyLottieComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={require("../../animation/Animation.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200, marginTop: 15 }}
      />
    </View>
  );
};

export default MyLottieComponent;
