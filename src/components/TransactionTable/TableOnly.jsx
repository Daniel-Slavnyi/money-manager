import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { selectCategories, selectTransactions } from 'redux/transaction/transaction-selector';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'transactionDate', headerName: 'Date', width: 200 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'categoryId', headerName: 'Category', width: 120 },
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
    width: 100,
  }
];

export default function DataTable() {

    const allTransactions = useSelector(selectTransactions);
    // const categories = useSelector(selectCategories);


// allTransactions.forEach(transfer => {

//  const name = ((categories.find(category => category.id === transfer.categoryId)).name)
// return transfer.categoryId = name
// })

  return (
    <div style={{ height: 500, width: 900 }}>
      <DataGrid
        rows={allTransactions}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[12]}
      />
    </div>
  );
}

