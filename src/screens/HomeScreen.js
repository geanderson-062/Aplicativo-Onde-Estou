import * as React from "react";
import { View } from "react-native";
import Map from "../components/Map";
import CustomButtonDetails from "../components/Buttom/CustomButtonDetails"; // Ajuste o caminho conforme a localização do arquivo

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Map />
      <CustomButtonDetails
        title="Ver Detalhes"
        onPress={() => navigation.navigate("Estou Aqui")}
      />
    </View>
  );
}

export default HomeScreen;
