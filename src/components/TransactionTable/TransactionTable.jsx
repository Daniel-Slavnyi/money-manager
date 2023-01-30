import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import {
  getCategories,
  refreshTransactions,
} from 'redux/transaction/transaction-operation';

import DataTable from './DataTable';
import BasicModal from 'components/BasicModal/BasicModal';

import { Container } from './TransactionTable.styled';

export default function TransactionTable() {
  const dispatch = useDispatch();
  const logedIn = useSelector(selectIsLoggedIn);

const openModalByID = (transationID) => {


}

  useEffect(() => {
    if (!logedIn) return;
    dispatch(refreshTransactions());
    dispatch(getCategories());
  }, [logedIn, dispatch]);

  return (
    <Container>
      <BasicModal />
      <DataTable />
    </Container>
  );
}
