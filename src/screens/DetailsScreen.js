import * as React from "react";
import { ScrollView } from "react-native";
import TextDetails from "../components/Text/InfoDetatails";

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
      <TextDetails />
    </ScrollView>
  );
}

export default DetailsScreen;
