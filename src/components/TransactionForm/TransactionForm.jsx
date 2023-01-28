import React from 'react';
import { FormControlLabel, FormGroup } from '@mui/material';
import { label, PinkSwitch } from 'components/TransactionForm/Switcher';
import { useDispatch } from 'react-redux';
import { newTransaction } from 'redux/transaction/transaction-operation';
import { Button, TextField } from '@mui/material';
import mainTheme from 'styles/theme';
import BasicDatePicker from './DatePicker';
import { FormBox } from './TransactionForm.styled';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import BasicSelect from './Categories';

export default function TransactionForm() {
  const dispatch = useDispatch();

  const NEW_TRANSACTION_QUERY_EXAMPLE = {
    transactionDate: '20190907',
    type: 'EXPENSE',
    categoryId: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    comment: 'string',
    amount: -400,
  };

  const createNewTransaction = () => {
    dispatch(newTransaction(NEW_TRANSACTION_QUERY_EXAMPLE));
  };

  return (
    <FormBox>
      <FormGroup>
        <h1>Add transaction</h1>
        <FormControlLabel
          control={
            <PinkSwitch
              inputProps={{ 'aria-label': 'controlled' }}
              {...label}
              defaultChecked
              size="big"
            />
          }
          label="Expense"
        />

<BasicSelect/>

        <TextField
          theme={mainTheme}
          type="number"
          placeholder="0.00"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />

        <BasicDatePicker />

        <TextField
          variant="standard"
          label="Comment"
          id="comment"
          name="comment"
          onChange={console.log('Text field')}
          helperText={'Helper text'}
        />

        <Button
          theme={mainTheme}
          onClick={createNewTransaction}
          variant="mainbutton"
          type="submit"
        >
          ADD
        </Button>

        <Button theme={mainTheme} variant="secondarybutton" href="/auth/login">
          CANCEL
        </Button>
      </FormGroup>
    </FormBox>
  );
}
