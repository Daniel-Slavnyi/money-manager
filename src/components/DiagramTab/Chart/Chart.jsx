import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutWrapper } from './Chart.styled';
import { useSelector } from 'react-redux';
import { selectStatistic } from 'redux/transaction/transaction-selector';


ChartJS.register(ArcElement, Tooltip, Legend);

const diagramColor = [
  '#00AD84',
  '#24CCA7',
  '#81E1FF',
  '#4A56E2',
  '#C5BAFF',
  '#FD9498',
  '#FFD8D0',
  '#FED057',
];

export default function Chart() {
  const summaryItem = useSelector(selectStatistic);
  const totalBalance = useSelector(state => state.auth.user.balance);
 

  const data = {
    labels: summaryItem.categoriesSummary.map(el => el.name),
    datasets: [
      {
        data: summaryItem.categoriesSummary.map(el => el.total),
        backgroundColor: diagramColor.map(el => el),
        borderColor: ['transparent'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      animateScale: true,
    },
    // plugins: {
    //   legend: false,
    // },
    cutout: '70%',
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = 'bolder 27px Circe';
      ctx.fillStyle = 'black';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(
        // ₴ totalBalance ? totalBalance.toFixed(2) : 0,
        totalBalance ? totalBalance.toFixed(2) : 0,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <>
      <DoughnutWrapper>
        <Doughnut data={data} plugins={[textCenter]} options={options} />
       
      </DoughnutWrapper>

     
    </>
  );
}
