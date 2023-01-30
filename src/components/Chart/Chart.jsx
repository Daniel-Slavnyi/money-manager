import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutWrapper } from './Chart.styled';
import { useSelector } from 'react-redux';
import { selectStatistic } from 'redux/transaction/transaction-selector';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const summaryItem = useSelector(selectStatistic);
  console.log('summaryItem', summaryItem);
  const data = {
    labels: summaryItem.categoriesSummary?.map(el => el.name),
    datasets: [
      {
        data: summaryItem.categoriesSummary?.map(el => el.total),
        backgroundColor: [
          '#00AD84',
          '#24CCA7',
          '#81E1FF',
          '#4A56E2',
          '#C5BAFF',
          '#FD9498',
          '#FFD8D0',
          '#FED057',
        ],
        borderColor: ['transparent'],
        borderWidth: 1,
      },
    ],
  };

  console.log('data', data);
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
    beforeDatasetsDraw(chart, arg, pluginsOptions) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = 'bolder 27px Circe';
      ctx.fillStyle = 'black';
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
    <>
      <DoughnutWrapper>
        <Doughnut data={data} plugins={[textCenter]} options={options} />
      </DoughnutWrapper>

      <select name="month" id="month-select">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <select name="year" id="year-select">
        <option value="2019">2019</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </>
  );
}
