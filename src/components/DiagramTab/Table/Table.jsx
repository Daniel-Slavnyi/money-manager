import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatistic } from 'redux/transaction/transaction-selector';
import {
  CaptionWrapper,
  ColorBox,
  ColorWrapper,
  Expenses,
  Income,
  Item,
  SpanCaption,
  SummaryTable,
  Transaction,
} from './Table.styled';

// const diagramColor = [
//   '#00AD84',
//   '#24CCA7',
//   '#81E1FF',
//   '#4A56E2',
//   '#C5BAFF',
//   '#FD9498',
//   '#FFD8D0',
//   '#FED057',
// ];

export default function ChartTable() {
  const summaryItem = useSelector(selectStatistic);

  return (
    <>
      <CaptionWrapper>
        <SpanCaption>Category</SpanCaption>
        <SpanCaption>Sum</SpanCaption>
      </CaptionWrapper>

      <ul>
        {summaryItem.categoriesSummary.map(el => (
          <Item key={el.name}>
            <ColorWrapper>
              <ColorBox></ColorBox>
              <span>{el.name}</span>
            </ColorWrapper>
            <span>{Math.abs(el.total.toFixed(2))}</span>
            {/* <span>{Math.abs(el.total ? el.total.toFixed(2) : 0 )}</span> */}
          </Item>
        ))}
      </ul>

      <SummaryTable>
        <Transaction>Expenses:</Transaction>
        <Expenses>{Math.abs(summaryItem.expenseSummary)}</Expenses>
      </SummaryTable>
      <SummaryTable>
        <Transaction>Income:</Transaction>
        <Income>{Math.abs(summaryItem.incomeSummary ? summaryItem.incomeSummary.toFixed(2) : 0)}</Income>
      </SummaryTable>
    </>
  );
}

// totalBalance ? totalBalance.toFixed(2) : 0,