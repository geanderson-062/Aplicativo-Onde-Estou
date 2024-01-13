import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Map from "../components/Map";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Map />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Estou Aqui")}
      >
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 100,
    borderWidth: 2,
    borderHeight: 2,
    padding: 10,
    marginBottom: "10%",
    width: "70%",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});

export default HomeScreen;
