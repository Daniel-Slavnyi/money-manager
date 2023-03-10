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
  List,
  SpanCaption,
  SummaryTable,
  Transaction,
} from './Table.styled';

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

  return (
    <>
      <CaptionWrapper>
        <SpanCaption>Category</SpanCaption>
        <SpanCaption>Sum</SpanCaption>
      </CaptionWrapper>
      <List>
        {summaryItem.categoriesSummary.map((el, index) => (
          <Item key={el.name}>
            <ColorWrapper>
              <ColorBox
                style={{ backgroundColor: diagramColor[index] }}
              ></ColorBox>
              <span>{el.name}</span>
            </ColorWrapper>
            <span>{Math.abs(el.total).toFixed(2)}</span>
          </Item>
        ))}
      </List>
      <SummaryTable>
        <Transaction>Expenses:</Transaction>
        <Expenses>{Math.abs(summaryItem.expenseSummary).toFixed(2)}</Expenses>
      </SummaryTable>
      <SummaryTable>
        <Transaction>Income:</Transaction>
        <Income>
          {summaryItem.incomeSummary
            ? Math.abs(summaryItem.incomeSummary).toFixed(2)
            : 0}
        </Income>
      </SummaryTable>
    </>
  );
}
