import { useEffect } from "react";

const TradingViewTicker = () => {
  useEffect(() => {
    // Check if the script is already added to prevent duplicates
    if (document.querySelector(".tradingview-widget-container__script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });
    script.classList.add("tradingview-widget-container__script");

    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);
  }, []);

  return (
    <div
      style={{ position: "fixed", bottom: "1px", zIndex: 8, width: "100%" }}
      className="tradingview-widget-container"
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">Markets</span>
        </a>
        by TradingView
      </div>
    </div>
  );
};

export default TradingViewTicker;
