import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";

const HomeScreen = () => {
  const { isDarkTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#fff" },
      ]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkTheme ? "#fff" : "#000" }]}>
          Welcome to the Financial Statistics App
        </Text>
        <Text
          style={[styles.description, { color: isDarkTheme ? "#ccc" : "#000" }]}
        >
          Develop a financial statistics web application that displays various
          financial metrics and statistics. The application should fetch
          real-time data from the internet, process it, and present it in an
          intuitive and user-friendly manner. Additionally, a simple backend
          should be implemented to handle data fetching and processing.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
