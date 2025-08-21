import { useState, useEffect } from "react";

const CryptoConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyOptions = [
    { code: "BTC", name: "Bitcoin (BTC)" },
    { code: "ETH", name: "Ethereum (ETH)" },
    { code: "USDT", name: "Tether (USDT)" },
    { code: "LTC", name: "Litecoin (LTC)" },
    { code: "XRP", name: "Ripple (XRP)" },
    { code: "ADA", name: "Cardano (ADA)" },
    { code: "DOGE", name: "Dogecoin (DOGE)" },
    { code: "DOT", name: "Polkadot (DOT)" },
    { code: "BCH", name: "Bitcoin Cash (BCH)" },
    { code: "LINK", name: "Chainlink (LINK)" },
    { code: "MATIC", name: "Polygon (MATIC)" },
    { code: "SOL", name: "Solana (SOL)" },
    { code: "BNB", name: "Binance Coin (BNB)" },
    { code: "TRX", name: "Tron (TRX)" },
    { code: "XLM", name: "Stellar (XLM)" },
    { code: "SHIB", name: "Shiba Inu (SHIB)" },
    { code: "FIL", name: "Filecoin (FIL)" },
    { code: "AVAX", name: "Avalanche (AVAX)" },
    { code: "NEAR", name: "Near Protocol (NEAR)" },
    { code: "DASH", name: "Dash (DASH)" },
    { code: "ZEC", name: "Zcash (ZEC)" },
    { code: "EUR", name: "Euro (EUR)" },
    { code: "GBP", name: "British Pound (GBP)" },
    { code: "JPY", name: "Japanese Yen (JPY)" },
    { code: "AUD", name: "Australian Dollar (AUD)" },
    { code: "CAD", name: "Canadian Dollar (CAD)" },
    { code: "CHF", name: "Swiss Franc (CHF)" },
    { code: "CNY", name: "Chinese Yuan (CNY)" },
    { code: "SGD", name: "Singapore Dollar (SGD)" },
    { code: "INR", name: "Indian Rupee (INR)" },
    { code: "MXN", name: "Mexican Peso (MXN)" },
    { code: "RUB", name: "Russian Ruble (RUB)" },
    { code: "ZAR", name: "South African Rand (ZAR)" },
  ];

  useEffect(() => {
    const convertCurrency = async () => {
      const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setConvertedAmount(data[toCurrency] * amount); // Convert the amount
      } catch (error) {
        console.error("Error fetching conversion data:", error);
      }
    };

    convertCurrency();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      <h3>Crypto Exchange Converter</h3>
      <div>
        <label>From:</label>
        <select  className="form-control" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencyOptions.map(({ code, name }) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>

        <label>To:</label>
        <select  className="form-control" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyOptions.map(({ code, name }) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>

        <label>Amount:</label>
        <input
        className="form-control"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {convertedAmount && (
        <div>
          <h4>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </h4>
        </div>
      )}
    </div>
  );
};

export default CryptoConverter;
