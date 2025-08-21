import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import { fetchBitcoinPrices } from '../utils/fetchBitcoinPrices';
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
} from "chart.js";
import { fetchBitcoinPrices } from "./FetchBitCoinPrice";

// Register Chart.js components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const BitcoinChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const prices = await fetchBitcoinPrices();

      const labels = prices.map((priceData) => {
        const date = new Date(priceData[0]);
        return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:00`;
      });

      const data = prices.map((priceData) => priceData[1]);

      setChartData({
        labels,
        datasets: [
          {
            label: "Bitcoin Price (USD)",
            data,
            borderColor: "rgba(75,192,192,1)",
            fill: false,
            tension: 0.1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bitcoin Price (Last 7 Days)",
      },
    },
  };

  return (
    <div>
      {chartData ? <Line data={chartData} options={options} /> : "Loading..."}
    </div>
  );
};

export default BitcoinChart;
