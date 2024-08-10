import { useState, useEffect } from "react";
import axios from "axios";

const useFetchStockData = (stockSymbol) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.133:8989/api/stocks/${stockSymbol}`,
          { timeout: 10000 } // Set a 10-second timeout
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [stockSymbol]);

  return { data, isLoading };
};

export default useFetchStockData;
