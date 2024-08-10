import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../hooks/ThemeContext";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome
          name="home"
          size={24}
          color={isDarkTheme ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <MaterialIcons
          name="show-chart"
          size={24}
          color={isDarkTheme ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("News")}>
        <FontAwesome
          name="newspaper-o"
          size={24}
          color={isDarkTheme ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTheme}>
        <FontAwesome
          name={isDarkTheme ? "sun-o" : "moon-o"}
          size={24}
          color={isDarkTheme ? "#fff" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default NavBar;
