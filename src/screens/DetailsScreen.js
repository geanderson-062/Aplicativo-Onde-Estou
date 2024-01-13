import * as React from "react";
import { ScrollView } from "react-native";
import TextDetails from "../components/Text/InfoDetatails";
import Animation from "../components/Animation";
import ButtonShareLocalization from "../components/Buttom/ButtonShareLocalization";

function DetailsScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginLeft: "10%",
        marginRight: "10%",
      }}
      contentContainerStyle={{
        justifyContent: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Animation />
      <TextDetails />
      <ButtonShareLocalization />
    </ScrollView>
  );
}

export default DetailsScreen;
