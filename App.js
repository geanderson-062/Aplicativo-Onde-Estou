import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

function CustomHeaderTitle({ title, iconName }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialIcons name={iconName} size={30} color="#E64512" />
      <Text style={{ marginLeft: 10, fontSize: 25 }}>{title}</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Onde Estou ?"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <CustomHeaderTitle
                title="Onde Estou ?"
                iconName="not-listed-location"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Estou Aqui"
          component={DetailsScreen}
          options={{
            headerTitle: () => (
              <CustomHeaderTitle title="Estou Aqui !" iconName="location-on" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
