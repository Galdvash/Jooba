import { useState, useEffect } from "react";
import axios from "axios";

const useFetchStockNews = (stockSymbol) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.113:8989/api/news/${stockSymbol}`
        );
        setNews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error.message);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [stockSymbol]);

  return { news, isLoading };
};

export default useFetchStockNews;
