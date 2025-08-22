import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartView({ transactions }) {
  const data = {
    labels: transactions.map(t => new Date(t.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Amount',
        data: transactions.map(t => t.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      }
    ]
  };
  return <Bar data={data} />;
}
