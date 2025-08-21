"use client"
import { useEffect } from "react";

const CryptoVolumeChart = ({ symbol = "BTC", currency = "USD", timeFrame = "1D" }) => {
  useEffect(() => {
    const loadScript = () => {
      console.log('Loading CryptoCompare widget...');

      const baseUrl = "https://widgets.cryptocompare.com/";
      const appName = encodeURIComponent(window.location.hostname) || "local";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;

      const theUrl = `${baseUrl}serve/v1/coin/volume/chart?fsym=${symbol}&tsym=${currency}&period=${timeFrame}`;
      script.src = `${theUrl}${theUrl.indexOf("?") >= 0 ? "&" : "?"}app=${appName}`;

      const container = document.getElementById("crypto-volume-chart-container");
      
      if (container) {
        // Clear the previous script/widget if any
        container.innerHTML = '';

        // Append the new script
        container.appendChild(script);
        console.log('Script appended successfully');
      } else {
        console.error("Container element not found");
      }
    };

    // Ensure this runs only in the client-side environment
    if (typeof window !== "undefined") {
      // Use a small delay to ensure the DOM is fully rendered
      setTimeout(loadScript, 500);
    }

    return () => {
      const container = document.getElementById("crypto-volume-chart-container");
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol, currency, timeFrame]);

  return (
    <div>
      <div id="crypto-volume-chart-container" className="w-100 h-100"></div>
    </div>
  );
};

export default CryptoVolumeChart;
