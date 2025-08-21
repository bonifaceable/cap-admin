import { useEffect } from "react";

const CryptoCompareWidget = () => {
  useEffect(() => {
    // Load the first script (crypto list)
    const loadFirstScript = () => {
      const container = document.getElementById("crypto-list");

      // Clear previous widget if any
      if (container) {
        container.innerHTML = "";
      }

      const baseUrl = "https://widgets.cryptocompare.com/";
      const appName = encodeURIComponent(window.location.hostname) || "local";
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      const theUrl = `${baseUrl}serve/v1/coin/list?fsym=BTC&tsyms=BTC,USD,CNY,EUR,GBP,GOLD,JPY,RUB,SGD,KRW,PLN,AUD,CAD,ZAR,SEK,AED,INR,DKK,MXN`;
      s.src = `${theUrl}${theUrl.indexOf("?") >= 0 ? "&" : "?"}app=${appName}`;

      // Append the script
      container.appendChild(s);
    };

    // Load the first script only
    loadFirstScript();

    // Cleanup on component unmount to avoid duplication
    return () => {
      const listContainer = document.getElementById("crypto-list");

      if (listContainer) listContainer.innerHTML = "";
    };
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  return (
    <div className="row">
      <div className="col-lg-12" id="crypto-list"></div>
    </div>
  );
};

export default CryptoCompareWidget;
