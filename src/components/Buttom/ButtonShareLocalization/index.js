import * as React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import useLocation from "../../../service/useLocation";
import styles from "./style";

export default function ShareLocalization() {
  const { location, address, errorMsg } = useLocation();
  const shareDetails = () => {
    let sharedMessage = `Detalhes da Minha Localização:\n`;
    if (location) {
      sharedMessage += `Latitude: ${location.coords.latitude}\n`;
      sharedMessage += `Longitude: ${location.coords.longitude}\n`;
      if (location.coords.altitude) {
        sharedMessage += `Altitude: ${location.coords.altitude} metros\n`;
      }
    }
    if (address) {
      sharedMessage += `País: ${address.country || "Não Localizado"}\n`;
      sharedMessage += `Estado: ${address.region || "Não Localizado"}\n`;
      sharedMessage += `Cidade: ${address.city || "Não Localizado"}\n`;
    }

    Share.share({ message: sharedMessage });
  };

  if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location || !address) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity style={styles.button} onPress={shareDetails}>
        <Text style={styles.buttonText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
}
