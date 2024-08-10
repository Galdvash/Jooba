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
          intuitive and user-friendly manner. Additionally, a simple Node.js
          backend should be implemented to handle data fetching and processing.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    backgroundColor: "#fafafa",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#4a90e2",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    color: "#757575",
    textAlign: "center",
  },
});

export default HomeScreen;
