import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import NewsScreen from "../screens/NewsScreen";
import NavBar from "./Navbar";
import { useTheme } from "../hooks/ThemeContext";

const Stack = createStackNavigator();

const Navigation = () => {
  const { isDarkTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#f5f5f5" },
      ]}
    >
      <StatusBar
        barStyle={isDarkTheme ? "light-content" : "dark-content"}
        backgroundColor={isDarkTheme ? "#333" : "#f5f5f5"}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="News" component={NewsScreen} />
        </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navigation;
