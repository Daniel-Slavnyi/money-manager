import { light } from '@mui/material/styles/createPalette';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectStatistic } from 'redux/transaction/transaction-selector';

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

export default function ChartTable() {
  const summaryItem = useSelector(selectStatistic);
  console.log('summaryItem.categoriesSummary', summaryItem.categoriesSummary);

  return (
    <>
    <div>ChartTable</div>
    <ul>
      {summaryItem.categoriesSummary.map(el => <li key={el.name}>
<span>{el.name}</span>
<span>{Math.abs(el.total)}</span>
      </li>)}
    </ul>
    </>
  )
}
