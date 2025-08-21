import { useEffect } from "react";

const CryptoComparisonChart = ({
  symbols = ["BTC", "ETH", "LTC"],
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
      const fsyms = symbols.join(",");
      const theUrl = `${baseUrl}serve/v1/coin/compare/chart?fsyms=${fsyms}&tsym=${currency}&period=${timeFrame}`;
      s.src = `${theUrl}${theUrl.indexOf("?") >= 0 ? "&" : "?"}app=${appName}`;
      document
        .getElementById("crypto-comparison-chart-container")
        .appendChild(s);
    };

    loadScript();
  }, [symbols, currency, timeFrame]);

  return (
    <div id="crypto-comparison-chart-container" className="w-100 h-100"></div>
  );
};

export default CryptoComparisonChart;
