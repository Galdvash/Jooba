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
import useFetchStockNews from "../hooks/useFetchStockNews";
import { useTheme } from "../hooks/ThemeContext";

const DetailScreen = () => {
  const { data, isLoading: isLoadingData } = useFetchStockData("IBM");
  const { news, isLoading: isLoadingNews } = useFetchStockNews("IBM");
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
      <View style={styles.news}>
        <Text
          style={[styles.newsTitle, { color: isDarkTheme ? "#fff" : "#000" }]}
        >
          News
        </Text>
        {isLoadingNews ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          news.map((article, index) => (
            <View key={index} style={styles.article}>
              <Text
                style={[
                  styles.articleTitle,
                  { color: isDarkTheme ? "#fff" : "#000" },
                ]}
              >
                {article.title}
              </Text>
              <Text
                style={[
                  styles.articleSummary,
                  { color: isDarkTheme ? "#ccc" : "#333" },
                ]}
              >
                {article.description}
              </Text>
              <Text
                style={[
                  styles.articleSource,
                  { color: isDarkTheme ? "#ccc" : "#333" },
                ]}
              >
                {article.source?.name || "Unknown Source"}{" "}
                {/* בדיקה אם השדה source קיים */}
              </Text>
            </View>
          ))
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
  news: {
    padding: 20,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  article: {
    marginBottom: 20,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  articleSummary: {
    fontSize: 14,
  },
  articleSource: {
    fontSize: 12,
    fontStyle: "italic",
  },
});

export default DetailScreen;
