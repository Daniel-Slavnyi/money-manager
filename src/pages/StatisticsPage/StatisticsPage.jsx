import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selector';
import { transactionSummary } from 'redux/transaction/transaction-operation';
import { selectStatistic } from 'redux/transaction/transaction-selector';
import Chart from 'components/DiagramTab/Chart/Chart';
import Table from 'components/DiagramTab/Table/Table';
import MultipleSelect from 'components/DiagramTab/Select/Select';
import {
  Caption,
  FlexWrapper,
  WrappCart,
  WrappTable,
} from './StatisticsPage.styled';

export default function StatisticsPage() {
  const [month, setMonth] = useState(new Date().toISOString());
  const [year, setYear] = useState(new Date().toISOString());

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const summaryItem = useSelector(selectStatistic);

  useEffect(() => {
    const dataOfTransaction = {
      month: moment(month).format('MM'),
      year: moment(year).format('YYYY'),
    };
    dispatch(transactionSummary(dataOfTransaction));
  }, [dispatch, token, month, year]);

  return (
    <>
      <FlexWrapper>
        <WrappCart>
          <Caption>Statistics</Caption>
          {summaryItem.categoriesSummary && <Chart />}
        </WrappCart>
        <WrappTable>
          <MultipleSelect setMonth={setMonth} setYear={setYear} />
          {summaryItem.categoriesSummary && <Table />}
        </WrappTable>
      </FlexWrapper>
    </>
  );
}
