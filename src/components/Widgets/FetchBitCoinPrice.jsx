import axios from "axios";

export const fetchBitcoinPrices = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
    {
      params: {
        vs_currency: "usd",
        days: "7", // Get data for the last 7 days
        interval: "hourly", // Fetch hourly data
      },
    }
  );
  return response.data.prices; // Return price data
};
