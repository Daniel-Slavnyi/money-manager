import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material';


export const DateTextField = styled(TextField)(theme => ({
  color: '#E0E0E0',
  marginLeft: '32px',
  
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      width: '170px',
      color: '#E0E0E0',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid #E0E0E0'
    },
    '& .MuiInputBase-input': {
      width: '160px',
      textAlign: 'center'
    },
    '&:hover fieldset': {
      borderColor: '#4A56E2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#24CCA7',
    },
  },
}));

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
        renderInput={params => <DateTextField {...params} />}
      />
    </LocalizationProvider>
  );
}
