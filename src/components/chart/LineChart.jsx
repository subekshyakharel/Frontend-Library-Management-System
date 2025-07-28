import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// LineChart Component
const LineChart = ({ text, labels, label1, label2, data1, data2 }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: text,
      },
    },
  };

  const data = {
    labels, // Array of month names like ["Jan", "Feb", ...]
    datasets: [
      {
        label: label1, // "Borrowed"
        data: data1,   // [5, 10, 3, ...]
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4, // smoother lines
        fill: true,
      },
      {
        label: label2, // "Returned"
        data: data2,   // [2, 8, 1, ...]
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
