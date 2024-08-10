import yahooFinance from "yahoo-finance2";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchStockData = async (symbol) => {
  try {
    const queryOptions = {
      period1: "2022-01-01",
      period2: "2022-12-31",
      interval: "1d",
    };
    const data = await yahooFinance.historical(symbol, queryOptions);
    return data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};

export const fetchStockNews = async (symbol) => {
  const apiKey = "pub_504111a393768fbbf8e13251f19774cc14822";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${symbol}`;

  try {
    const response = await axios.get(url);
    console.log("Full response data:", response.data); // דיבוג התגובה המלאה

    if (response.data && response.data.results) {
      console.log("Articles:", response.data.results);
      return response.data.results.map((article) => ({
        title: article.title,
        description: article.description,
        source: article.source?.name, // גישה זהירה לשדה 'name'
        url: article.link,
      }));
    } else {
      console.log("No articles found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
