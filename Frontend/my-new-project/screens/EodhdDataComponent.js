import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import useFetchEodhdData from "../hooks/useFetchEodhdData";

const EodhdDataComponent = ({ symbol }) => {
  const { data, error, isLoading } = useFetchEodhdData(symbol);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error)
    return (
      <Text style={styles.error}>
        Error: {error.response ? error.response.data.error : error.message}
      </Text>
    );

  if (!data.length) return <Text>No data available</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data for {symbol}</Text>
      {data.map((entry) => (
        <View key={entry.date} style={styles.dataItem}>
          <Text>Date: {entry.date}</Text>
          <Text>Open: ${entry.open}</Text>
          <Text>High: ${entry.high}</Text>
          <Text>Low: ${entry.low}</Text>
          <Text>Close: ${entry.close}</Text>
          <Text>Volume: {entry.volume}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
  dataItem: {
    marginVertical: 10,
  },
});

export default EodhdDataComponent;
