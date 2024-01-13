import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButtonDetails = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 100,
    borderWidth: 2,
    padding: 10,
    marginBottom: "10%",
    width: "70%",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});

export default CustomButtonDetails;
