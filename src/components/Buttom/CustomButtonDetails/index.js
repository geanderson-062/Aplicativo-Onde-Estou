import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "./style";

const CustomButtonDetails = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonDetails;
