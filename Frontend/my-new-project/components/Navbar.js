import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../hooks/ThemeContext";

const NavBar = () => {
  const navigation = useNavigation();
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.navbar,
        { backgroundColor: isDarkTheme ? "#444" : "#ddd" },
      ]}
    >
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      <Button title={isDarkTheme ? "☀️" : "🌑"} onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default NavBar;
