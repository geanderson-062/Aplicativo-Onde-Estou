import * as React from "react";
import { View, Text } from "react-native";
import useLocation from "../../../service/useLocation";
import styles from "./style";

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
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
            marginTop: 30,
            marginBottom: 30,
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
      <Text style={styles.TitleText}>Pricipais</Text>

      <View style={styles.ViewAreaText}>
        <View style={styles.ViewText}>
          <Text style={styles.Text}>
            Continente: {displayInfo(address.continent)}
          </Text>
          <Text style={styles.Text}>País: {displayInfo(address.country)}</Text>
          <Text style={styles.Text}>Estado: {displayInfo(address.region)}</Text>
          <Text style={styles.Text}>Cidade: {displayInfo(address.city)}</Text>
          <Text style={styles.Text}>Rua: {displayInfo(address.street)}</Text>
          <Text style={styles.Text}>
            CEP: {displayInfo(address.postalCode)}
          </Text>
        </View>
      </View>

      <Text style={styles.TitleText}>Mais Detalhes</Text>

      <View style={styles.ViewAreaText}>
        <View style={styles.ViewText}>
          {location.coords.altitude !== null && (
            <Text style={styles.Text}>
              Altitude: {location.coords.altitude} metros
            </Text>
          )}
          <Text style={styles.Text}>Latitude: {location.coords.latitude}</Text>
          <Text style={styles.Text}>
            Longitude: {location.coords.longitude}
          </Text>
          <Text style={styles.Text}>
            Precisão: {location.coords.accuracy} metros
          </Text>
          {location.coords.altitudeAccuracy !== null && (
            <Text style={styles.Text}>
              Precisão da Altitude: {location.coords.altitudeAccuracy} metros
            </Text>
          )}
          {location.coords.heading !== null && (
            <Text style={styles.Text}>
              Direção: {location.coords.heading} graus
            </Text>
          )}
          {location.coords.speed !== null && (
            <Text style={styles.Text}>
              Velocidade: {location.coords.speed} metros/segundo
            </Text>
          )}
          <Text style={styles.Text}>
            Verificado: {new Date(location.timestamp).toLocaleString()}
          </Text>
        </View>
      </View>
    </>
  );
}
