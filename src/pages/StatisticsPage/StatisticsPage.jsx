import Chart from 'components/DiagramTab/Chart/Chart';
import React from 'react';
import { useEffect } from 'react';
import { transactionSummary } from 'redux/transaction/transaction-operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selector';
import { useState } from 'react';
import { selectStatistic } from 'redux/transaction/transaction-selector';
import Table from 'components/DiagramTab/Table/Table';
import Select from 'components/DiagramTab/Select/Select';
import { Balance } from 'components/Balance/Balance';

export default function StatisticsPage() {
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2023');
  console.log(setMonth);
  console.log(setYear);
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
      <Select/>
      {summaryItem.categoriesSummary &&  <Table/>}
    
    </>
  );
}
