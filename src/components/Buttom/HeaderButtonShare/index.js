import * as React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import useLocation from "../../../service/useLocation";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function HeaderButtonShare() {
  const { location, address, errorMsg } = useLocation();

  const shareDetails = () => {
    let sharedMessage = "Detalhes da Minha Localização:\n";
    let mapLink = "";

    if (location) {
      const { latitude, longitude } = location.coords;
      sharedMessage += `Latitude: ${latitude}\n`;
      sharedMessage += `Longitude: ${longitude}\n`;
      mapLink = `https://www.google.com/maps/?q=${latitude},${longitude}`;
      sharedMessage += `\n\nClique aqui para ver no Mapa onde estou: ${mapLink}\n\n\n`;
      sharedMessage += `Verificado: ${new Date(
        location.timestamp
      ).toLocaleString()}\n\n`;
    }

    if (address) {
      sharedMessage += `Continente: ${address.continent || "Não Localizado"}\n`;
      sharedMessage += `País: ${address.country || "Não Localizado"}\n`;
      sharedMessage += `Estado: ${address.region || "Não Localizado"}\n`;
      sharedMessage += `Cidade: ${address.city || "Não Localizado"}\n`;
      sharedMessage += `CEP: ${address.postalCode || "Não Localizado"}\n`;
      sharedMessage += `Rua: ${address.street || "Não Localizado"}\n`;
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
      </TouchableOpacity>
    </View>
  );
}
