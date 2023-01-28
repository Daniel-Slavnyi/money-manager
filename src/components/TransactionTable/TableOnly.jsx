import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transaction/transaction-selector';


const columns = [
  { field: 'transactionDate', headerName: 'Date', width: 100 },
  { field: 'type', headerName: 'Type', width: 120 },
  { field: 'categoryId', headerName: 'Category', width: 120 },
  {
    field: 'comment',
    headerName: 'Comment',
    type: 'string',
    width: 90,
  },
  {
    field: 'amount',
    headerName: 'Sum',
    type: 'string',
    width: 90,
  },
  {
    field: 'balanceAfter',
    headerName: 'Balance',
    type: 'number',
    width: 160,
  }
];

export default function DataTable() {
    const allTransactions = useSelector(selectTransactions);
    // const categories = useSelector(selectCategories);

    
//     console.log(categories);

// const newArray = allTransactions.map(transfer => {
// const newObj = categories.find(obj => transfer.categoryId === obj.id)
// console.log(newObj);
// return newObj
// })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={allTransactions}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

