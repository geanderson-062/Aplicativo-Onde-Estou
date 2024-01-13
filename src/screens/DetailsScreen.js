import * as React from "react";
import { View, Text } from "react-native";
import useLocation from "../service/useLocation";

function DetailsScreen() {
  const { location, address, errorMsg } = useLocation();

  if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location || !address) {
    return (
      <View>
        <Text
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          Carregando...
        </Text>
      </View>
    );
  }

  const displayInfo = (info) => info || "Não Localizado";

  return (
    <View style={{ flex: 1, justifyContent: "center", marginLeft: "10%" }}>
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        Latitude: {location.coords.latitude}
      </Text>
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        Longitude: {location.coords.longitude}
      </Text>
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        País: {displayInfo(address.country)}
      </Text>
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        Estado: {displayInfo(address.region)}
      </Text>
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        Cidade: {displayInfo(address.city)}
      </Text>
      {location.coords.altitude !== null && (
        <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
          Altitude: {location.coords.altitude} metros
        </Text>
      )}
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        Precisão: {location.coords.accuracy} metros
      </Text>
      {location.coords.altitudeAccuracy !== null && (
        <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
          Precisão da Altitude: {location.coords.altitudeAccuracy} metros
        </Text>
      )}
      {location.coords.heading !== null && (
        <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
          Direção: {location.coords.heading} graus
        </Text>
      )}
      {location.coords.speed !== null && (
        <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
          Velocidade: {location.coords.speed} metros/segundo
        </Text>
      )}
      <Text style={{ textAlign: "left", fontSize: 20, marginBottom: 5 }}>
        Timestamp: {new Date(location.timestamp).toLocaleString()}
      </Text>
    </View>
  );
}

export default DetailsScreen;
