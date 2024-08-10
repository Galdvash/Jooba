import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import LineChart from "../components/LineChart";
import useFetchStockData from "../hooks/useFetchStockData";
import { useTheme } from "../hooks/ThemeContext";

const DetailScreen = () => {
  const { data, isLoading: isLoadingData } = useFetchStockData("IBM");
  const { isDarkTheme } = useTheme();

  const summary =
    data.length > 0
      ? {
          totalDays: data.length,
          averageClose: (
            data.reduce((acc, curr) => acc + curr.close, 0) / data.length
          ).toFixed(2),
          totalVolume: data.reduce((acc, curr) => acc + curr.volume, 0),
        }
      : null;

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#fff" },
      ]}
    >
      <View style={styles.content}>
        {isLoadingData ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {summary && (
              <View style={styles.summary}>
                <Text
                  style={[
                    styles.summaryText,
                    { color: isDarkTheme ? "#fff" : "#000" },
                  ]}
                >
                  Total Days: {summary.totalDays}
                </Text>
                <Text
                  style={[
                    styles.summaryText,
                    { color: isDarkTheme ? "#fff" : "#000" },
                  ]}
                >
                  Average Close: {summary.averageClose}
                </Text>
                <Text
                  style={[
                    styles.summaryText,
                    { color: isDarkTheme ? "#fff" : "#000" },
                  ]}
                >
                  Total Volume: {summary.totalVolume}
                </Text>
              </View>
            )}
            <LineChart data={data} />
          </>
        )}
      </View>
    </ScrollView>
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
  summary: {
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailScreen;
