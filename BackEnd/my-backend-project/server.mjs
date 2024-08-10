import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fetchStockData, fetchStockNews } from "./apiHandlers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8989;

app.use(cors());

// נתוני מניות - נשאר ללא שינוי
app.get("/api/stocks/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const data = await fetchStockData(symbol);
    if (data) {
      const formattedData = data.map((item) => ({
        date: item.date.toISOString().split("T")[0],
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
        volume: item.volume,
      }));

      res.json(formattedData);
    } else {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// חדשות לפי סימול
app.get("/api/news/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const news = await fetchStockNews(symbol);
    if (news && news.length > 0) {
      res.json(news);
    } else {
      res.status(404).json({ error: "No news found" });
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
