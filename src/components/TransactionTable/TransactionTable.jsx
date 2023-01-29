
import TransactionForm from 'components/TransactionForm/TransactionForm';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import {
  getCategories,
  refreshTransactions,
} from 'redux/transaction/transaction-operation';
import DataTable from './TableOnly';
import { Container } from './TransactionTable.styled';

export default function TransactionTable() {
  const dispatch = useDispatch();
  const logedIn = useSelector(selectIsLoggedIn)

  const showAllTransactions = () => {
    dispatch(refreshTransactions());
  };

  useEffect(() => {
    if(!logedIn) return;
    dispatch(getCategories());
  }, [dispatch, logedIn]);

  useEffect(() => {
if(!logedIn) return;
    showAllTransactions()
  });

  return (
    <Container>
      <TransactionForm/>
      <DataTable/>
    </Container>
  );
}
