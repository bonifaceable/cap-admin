import { useEffect } from "react";

const CryptoHistoricalPriceChart = ({
  symbol = "BTC",
  currency = "USD",
  timeFrame = "30D",
}) => {
  useEffect(() => {
    const loadScript = () => {
      const baseUrl = "https://widgets.cryptocompare.com/";
      const appName = encodeURIComponent(window.location.hostname) || "local";
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      const theUrl = `${baseUrl}serve/v1/histoday?fsym=${symbol}&tsym=${currency}&limit=${timeFrame}`;
      s.src = `${theUrl}${theUrl.indexOf("?") >= 0 ? "&" : "?"}app=${appName}`;
      document
        .getElementById("crypto-historical-price-chart-container")
        .appendChild(s);
    };

    loadScript();
  }, [symbol, currency, timeFrame]);

  return (
    <div
      id="crypto-historical-price-chart-container"
      className="w-100 h-100"
    ></div>
  );
};

export default CryptoHistoricalPriceChart;
