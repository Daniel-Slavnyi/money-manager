import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  newTransaction,
  refreshTransactions,
} from 'redux/transaction/transaction-operation';
import { selectTransactions } from 'redux/transaction/transaction-selector';
import DataTable from './TableOnly';
import { Container } from './TransactionTable.styled';

const NEW_TRANSACTION_QUERY_EXAMPLE = {
  transactionDate: '20190907',
  type: 'EXPENSE',
  categoryId: 'c9d9e447-1b83-4238-8712-edc77b18b739',
  comment: 'string',
  amount: -400,
};

export default function TransactionTable() {
  const dispatch = useDispatch();

  const allTransactions = useSelector(selectTransactions);

  const createNewTransaction = () => {
    dispatch(newTransaction(NEW_TRANSACTION_QUERY_EXAMPLE));
  };

  const showAllTransactions = () => {
    dispatch(refreshTransactions());
  };

  useEffect(() => {
    console.log(allTransactions);
  }, [allTransactions]);

  return (
    <Container>
      <DataTable />
      <div>
        <form></form>

        <button onClick={showAllTransactions} type="button">
          Show All Transactions
        </button>
        <button onClick={createNewTransaction} type="button">
          New transaction
        </button>
      </div>
    </Container>
  );
}
