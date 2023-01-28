import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutWrapper } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Statistics',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#81E1FF',
          '#4A56E2',
          '#C5BAFF',
          '#FD9498',
          '#FFD8D0',
          '#FED057',
        ],
        borderColor: [
          '#81E1FF',
          '#4A56E2',
          '#C5BAFF',
          '#FD9498',
          '#FFD8D0',
          '#FED057',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      animateScale: true,
    },
  };
  const textCenter = {
    id: 'textCenter',
    beforeDataSetsDraw(chart, arg, pluginsOptions) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = 'bolder 27px sans-serif';
      // font Circe
      ctx.fillStyle = 'red';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(
        'text',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <DoughnutWrapper>
      <Doughnut data={data} pludins={[textCenter]} options={options} />
    </DoughnutWrapper>
  );
}
