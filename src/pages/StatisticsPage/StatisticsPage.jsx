import Chart from 'components/Chart/Chart';
import React from 'react';
import { Balance } from '../../components/Balance/Balance';
import { useEffect } from 'react';
import { transactionSummary } from 'redux/transaction/transaction-operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/auth-selector';
import { useState } from 'react';
import { selectStatistic } from 'redux/transaction/transaction-selector';

export default function StatisticsPage() {
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2023');

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const summaryItem = useSelector(selectStatistic);

  useEffect(() => {
    if (!token) {
      console.log('isLogedIn');
      return;
    }
    const dataOfTransaction = {
      month,
      year,
    };
    dispatch(transactionSummary(dataOfTransaction));
  }, [dispatch, token, month, year]);


  return (
    <>
      <Balance />
      {summaryItem.categoriesSummary && <Chart />}
    </>
  );
}
