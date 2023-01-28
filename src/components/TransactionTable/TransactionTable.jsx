
import TransactionForm from 'components/TransactionForm/TransactionForm';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  refreshTransactions,
} from 'redux/transaction/transaction-operation';
import { selectTransactions } from 'redux/transaction/transaction-selector';
import DataTable from './TableOnly';
import { Container } from './TransactionTable.styled';

// const NEW_TRANSACTION_QUERY_EXAMPLE = {
//   transactionDate: '20190907',
//   type: 'EXPENSE',
//   categoryId: 'c9d9e447-1b83-4238-8712-edc77b18b739',
//   comment: 'string',
//   amount: -400,
// };

export default function TransactionTable() {
  const dispatch = useDispatch();

  const allTransactions = useSelector(selectTransactions);

  const showAllTransactions = () => {
    dispatch(refreshTransactions());
  };

  useEffect(() => {
    showAllTransactions()
  }, []);

  return (
    <Container>
      <TransactionForm/>
      <DataTable/>
    </Container>
  );
}
