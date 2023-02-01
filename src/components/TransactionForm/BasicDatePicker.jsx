import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material';

const DateField = styled('input')({
  width: '40px',
  height: '40px',
  background: 'red',
});

export default function BasicDatePicker({
  setTransactionDate,
  transactionDate,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      required
      inputFormat="DD.MM.YY"
        value={transactionDate}
        onChange={newValue => {
          setTransactionDate(newValue.toISOString());
        }}
        renderInput={params => <TextField sx={{width: '181px'}} {...params} />}
      />
    </LocalizationProvider>
  );
}
