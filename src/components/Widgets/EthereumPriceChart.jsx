import { useEffect } from "react";

const EthereumPriceChart = ({
  currency = "USD", // Default currency can still be USD or any other supported currency
  timeFrame = "1D", // Default time frame (e.g., 1D, 1W, 1M)
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

      // Ethereum (ETH) symbol is used here
      const theUrl = `${baseUrl}serve/v1/coin/chart?fsym=ETH&tsym=${currency}&period=${timeFrame}`;
      script.src = `${theUrl}${
        theUrl.indexOf("?") >= 0 ? "&" : "?"
      }app=${appName}`;

      // Append the new script to the container
      container.appendChild(script);
    };

    // Ensure the DOM element is ready and script is loaded only once per change in currency or timeFrame
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
  }, [currency, timeFrame]); // Dependencies: currency and timeFrame

  return (
    <div
      id="crypto-price-chart-container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default EthereumPriceChart;
