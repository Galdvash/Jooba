import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import useFetchStockNews from "../hooks/useFetchStockNews";
import { useTheme } from "../hooks/ThemeContext";

const NewsScreen = () => {
  const { news, isLoading: isLoadingNews } = useFetchStockNews("IBM");
  const { isDarkTheme } = useTheme();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#fff" },
      ]}
    >
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

export default NewsScreen;
