import { useEffect } from "react";

const LiveCryptoChart = ({
  symbol = "BTC",  // Default to Bitcoin
  currency = "USD", // Default to USD
}) => {
  useEffect(() => {
    const loadScript = () => {
      const container = document.getElementById("live-crypto-chart-container");

      // Clear previous widget if any
      if (container) {
        container.innerHTML = "";
      }

      const baseUrl = "https://widgets.cryptocompare.com/";
      const appName = encodeURIComponent(window.location.hostname) || "local";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;

      // Use CryptoCompare API to show a live price chart
      const theUrl = `${baseUrl}serve/v1/coin/chart?fsym=${symbol}&tsym=${currency}&period=1D`; // 1 Day period for live updates
      script.src = `${theUrl}${theUrl.indexOf("?") >= 0 ? "&" : "?"}app=${appName}`;

      // Append the script to the container
      container.appendChild(script);
    };

    loadScript();

    // Cleanup on component unmount
    return () => {
      const container = document.getElementById("live-crypto-chart-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [symbol, currency]);

  return <div id="live-crypto-chart-container" style={{ width: "100%", height: "400px" }}></div>;
};

export default LiveCryptoChart;
