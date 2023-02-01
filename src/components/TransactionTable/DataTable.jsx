import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import {
  selectTransactions,
  selectCategories,
} from 'redux/transaction/transaction-selector';

import moment from 'moment/moment';
import { Button } from '@mui/material';


import EditModal from 'components/EditModal/EditModal';
import ModalConfirmDelete from 'components/ModalConfirmDelete/ModalConfirmDelete';
import { DataGridStyled } from './TransactionTable.styled';

export default function DataTable() {

  const columns = [
    { field: 'transactionDate', headerName: 'Date', width: 90 },
    { field: 'type', headerName: 'Type', width: 100 },
    { field: 'name', headerName: 'Category', width: 120 },
    {
      field: 'comment',
      headerName: 'Comment',
      type: 'string',
      width: 160,
    },
    {
      field: 'amount',
      headerName: 'Sum',
      type: 'string',
      width: 90,
      renderCell: params=> {

      }
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance',
      type: 'number',
      width: 90,
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
    <div style={{ height: 500, width: 920, padding: '0 16px 0 39px' }}>
      <DataGridStyled
        rows={newArray}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[12]}
        disableColumnMenu
        disableDensitySelector={true}
        disableSelectionOnClick
        BaseButton={Button}
        sx={{ fontSize: '16px', border: 'none' }}
      />
    </div>
  );
}
