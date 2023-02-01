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
import { DataGridStyled, MobileItem, MobileItemPositive, MobileList, MobileName, MobileRow, MobileValue } from './TransactionTable.styled';

export default function DataTable() {
  const columns = [
    { field: 'transactionDate', headerName: 'Date', width: 90 },
    {
      field: 'type',
      headerName: 'Type',
      width: 90,
      renderCell: params =>
        params.row.type === 'INCOME' ? <span>+</span> : <span>-</span>,
    },
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
      cellClassName: params => (params.row.amount > 0 ? 'green' : 'red'),
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
    <>
      <MobileList>
        {newArray.map(obj => (
           <MobileItem style={obj.amount > 0 ? {borderLeft: '5px solid #24CCA7'} : {borderLeft: '5px solid #FF6596'}}>
            <MobileRow>
              <MobileName>Data</MobileName>
              <MobileValue>{obj.transactionDate}
</MobileValue>
            </MobileRow>
            <MobileRow>
              <MobileName>Type</MobileName>
              <MobileValue>{obj.type === 'INCOME' ? '+' : '-' }
</MobileValue>
            </MobileRow>
            <MobileRow>
              <MobileName>Category</MobileName>
              <MobileValue>{obj.name}</MobileValue>
            </MobileRow>
            <MobileRow>
              <MobileName>Comment</MobileName>
              <MobileValue>{obj.comment}</MobileValue>
            </MobileRow>
            <MobileRow>
              <MobileName>Sum</MobileName>
              <MobileValue style={obj.amount > 0 ? {color: '#24CCA7'} : {color: '#FF6596'}}>{obj.amount}
</MobileValue>
            </MobileRow>
            <MobileRow>
              <MobileName>Balance</MobileName>
              <MobileValue>{obj.balanceAfter}</MobileValue>
            </MobileRow>
          </MobileItem>
        ))}
      </MobileList>
      <div style={{display: 'none', height: 500, width: 920, padding: '0 16px 0 39px' }}>
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
    </>
  );
}
