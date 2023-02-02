import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import {
  selectTransactions,
  selectCategories,
} from 'redux/transaction/transaction-selector';

import moment from 'moment/moment';

const columns = [
  { field: 'transactionDate', headerName: 'Date', width: 100 },
  { field: 'type', headerName: 'Type', width: 120 },
  { field: 'name', headerName: 'Category', width: 120 },
  {
    field: 'comment',
    headerName: 'Comment',
    type: 'string',
    width: 200,
  },
  {
    field: 'amount',
    headerName: 'Sum',
    type: 'string',
    width: 100,
  },
  {
    field: 'balanceAfter',
    headerName: 'Balance',
    type: 'number',
    width: 160,
  },
];

export default function DataTable() {
  const allTransactions = useSelector(selectTransactions);
  const allCategories = useSelector(selectCategories);

  const newArray = allTransactions.map(transaction => ({
    ...allCategories.find(obj => transaction.categoryId === obj.id),
    ...transaction,
    transactionDate: moment(transaction.transactionDate).format('DD.MM.YY'),
  }));

  return (
    <div style={{ height: 500, width: 900 }}>
      <DataGrid
        rows={newArray}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
      />
    </div>
  );
}
