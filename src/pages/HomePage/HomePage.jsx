import TransactionTable from 'components/TransactionTable/TransactionTable';
import React from 'react';
import { Balance } from '../../components/Balance/Balance'

export default function HomePage() {
  return (
    <>
      <Balance />
      <TransactionTable />
    </>
  );
}
