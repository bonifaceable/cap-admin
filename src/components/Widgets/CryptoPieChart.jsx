import { useEffect } from "react";

const CryptoPriceChart = ({
  symbol = "BTC",
  currency = "USD",
  timeFrame = "1D",
}) => {
  useEffect(() => {
    const loadScript = () => {
      const container = document.getElementById("crypto-price-chart-container");

      // Clear the previous chart if any
      if (container) {
        container.innerHTML = "";
      }

      const baseUrl = "https://widgets.cryptocompare.com/";
      const appName = encodeURIComponent(window.location.hostname) || "local";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;

      const theUrl = `${baseUrl}serve/v1/coin/chart?fsym=${symbol}&tsym=${currency}&period=${timeFrame}`;
      script.src = `${theUrl}${
        theUrl.indexOf("?") >= 0 ? "&" : "?"
      }app=${appName}`;

      // Append the new script to the container
      container.appendChild(script);
    };

    // Ensure the DOM element is ready and script is loaded only once per change in symbol, currency, or timeFrame
    if (typeof window !== "undefined") {
      loadScript();
    }

    // Clean up on unmount or re-render to avoid duplication
    return () => {
      const container = document.getElementById("crypto-price-chart-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [symbol, currency, timeFrame]); // Dependencies: symbol, currency, timeFrame

  return (
    <div
      id="crypto-price-chart-container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default CryptoPriceChart;
