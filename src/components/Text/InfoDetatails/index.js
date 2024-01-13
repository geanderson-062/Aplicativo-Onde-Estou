import * as React from "react";
import { View, Text } from "react-native";
import useLocation from "../../../service/useLocation";

export default function TextDetails() {
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
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
          }}
        >
          Carregando...
        </Text>
      </View>
    );
  }

  const displayInfo = (info) => info || "Não Localizado";

  return (
    <>
      <Text
        style={{
          marginBottom: 30,
          textAlign: "center",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Pricipais
      </Text>
      <View
        style={{
          backgroundColor: "#E2E1E7",
          marginBottom: 30,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 5,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          País: {displayInfo(address.country)}
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          Estado: {displayInfo(address.region)}
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          Cidade: {displayInfo(address.city)}
        </Text>
      </View>
      <Text style={{ marginBottom: 30, textAlign: "center", fontSize: 30 }}>
        Mais Detalhes
      </Text>
      <View
        style={{
          backgroundColor: "#E2E1E7",
          marginBottom: 30,
          borderRadius: 10,
        }}
      >
        {location.coords.altitude !== null && (
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              marginBottom: 5,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Altitude: {location.coords.altitude} metros
          </Text>
        )}
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          Latitude: {location.coords.latitude}
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          Longitude: {location.coords.longitude}
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          Precisão: {location.coords.accuracy} metros
        </Text>
        {location.coords.altitudeAccuracy !== null && (
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              marginBottom: 5,
              marginLeft: 10,
            }}
          >
            Precisão da Altitude: {location.coords.altitudeAccuracy} metros
          </Text>
        )}
        {location.coords.heading !== null && (
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              marginBottom: 5,
              marginLeft: 10,
            }}
          >
            Direção: {location.coords.heading} graus
          </Text>
        )}
        {location.coords.speed !== null && (
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              marginBottom: 5,
              marginLeft: 10,
            }}
          >
            Velocidade: {location.coords.speed} metros/segundo
          </Text>
        )}
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          Verificado: {new Date(location.timestamp).toLocaleString()}
        </Text>
      </View>
    </>
  );
}
