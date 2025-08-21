import { useEffect } from "react";

const CryptoMarketCapChart = ({
  symbol = "BTC",
  currency = "USD",
  timeFrame = "1D",
}) => {
  useEffect(() => {
    const loadScript = () => {
      const baseUrl = "https://widgets.cryptocompare.com/";
      const appName = encodeURIComponent(window.location.hostname) || "local";
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      const theUrl = `${baseUrl}serve/v1/coin/marketcap/chart?fsym=${symbol}&tsym=${currency}&period=${timeFrame}`;
      s.src = `${theUrl}${theUrl.indexOf("?") >= 0 ? "&" : "?"}app=${appName}`;
      document
        .getElementById("crypto-marketcap-chart-container")
        .appendChild(s);
    };

    loadScript();
  }, [symbol, currency, timeFrame]);

  return (
    <div
      id="crypto-marketcap-chart-container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default CryptoMarketCapChart;
