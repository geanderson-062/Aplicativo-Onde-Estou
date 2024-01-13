import * as React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import useLocation from "../../../service/useLocation";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function ShareLocalization() {
  const { location, address, errorMsg } = useLocation();
  const shareDetails = () => {
    let sharedMessage = `Detalhes da Minha Localização:\n`;
    if (location) {
      sharedMessage += `Latitude: ${location.coords.latitude}\n`;
      sharedMessage += `Longitude: ${location.coords.longitude}\n`;
      if (location.coords.altitude !== null) {
        sharedMessage += `Altitude: ${location.coords.altitude} metros\n`;
      }
      if (location.coords.accuracy !== null) {
        sharedMessage += `Precisão: ${location.coords.accuracy} metros\n`;
      }
      if (location.coords.altitudeAccuracy !== null) {
        sharedMessage += `Precisão da Altitude: ${location.coords.altitudeAccuracy} metros\n`;
      }
      if (location.coords.heading !== null) {
        sharedMessage += `Direção: ${location.coords.heading} graus\n`;
      }
      if (location.coords.speed !== null) {
        sharedMessage += `Velocidade: ${location.coords.speed} metros/segundo\n`;
      }
      sharedMessage += `Verificado: ${new Date(
        location.timestamp
      ).toLocaleString()}\n`;
    }
    if (address) {
      sharedMessage += `Continente: ${address.continent || "Não Localizado"}\n`;
      sharedMessage += `País: ${address.country || "Não Localizado"}\n`;
      sharedMessage += `Estado: ${address.region || "Não Localizado"}\n`;
      sharedMessage += `Cidade: ${address.city || "Não Localizado"}\n`;
      sharedMessage += `CEP: ${address.postalCode || "Não Localizado"}\n`;
      sharedMessage += `RUA: ${address.street || "Não Localizado"}\n`;
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
        <FontAwesome name="share" size={24} color="#E64512" />
        <Text style={styles.buttonText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
}
