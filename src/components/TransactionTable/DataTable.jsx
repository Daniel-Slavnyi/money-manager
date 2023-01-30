import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTransactions,
  selectCategories,
} from 'redux/transaction/transaction-selector';

import moment from 'moment/moment';
import { Button } from '@mui/material';
import mainTheme from 'styles/theme';
import { deleteTransaction } from 'redux/transaction/transaction-operation';
import EditModal from 'components/EditModal/EditModal';
import ModalConfirmDelete from 'components/ModalConfirmDelete/ModalConfirmDelete';

export default function DataTable() {
  const dispatch = useDispatch();

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
      width: 80,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance',
      type: 'number',
      width: 100,
    },
    {
      field: 'action',
      headerName: '',
      sortable: false,
      width: 160,
      renderCell: params => {
        return (
          <>
            <EditModal params={params} />
            <ModalConfirmDelete params={params} />
          </>
        );
      },
    },
  ];

  const allTransactions = useSelector(selectTransactions);
  const allCategories = useSelector(selectCategories);

  const newArray = allTransactions.map(transaction => ({
    ...allCategories.find(obj => transaction.categoryId === obj.id),
    ...transaction,
    transactionDate: moment(transaction.transactionDate).format('DD.MM.YY'),
  }));

  return (
    <div style={{ height: 500, width: 1000 }}>
      <DataGrid
        rows={newArray}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[12]}
        disableColumnMenu
        disableDensitySelector={true}
        disableSelectionOnClick
        BaseButton={Button}
        sx={{ fontSize: '16px' }}
      />
    </div>
  );
}
