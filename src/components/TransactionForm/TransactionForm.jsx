import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormControlLabel, FormGroup } from '@mui/material';
import { Button, TextField } from '@mui/material';

import BasicDatePicker from './DatePicker';
import Categories from './Categories';
import { label, PinkSwitch } from 'components/TransactionForm/Switcher';
import { newTransaction } from 'redux/transaction/transaction-operation';

import mainTheme from 'styles/theme';
import {
  ExpenseActive,
  FormBox,
  IncomeActive,
  SpanPassive,
  SwitchBox,
} from './TransactionForm.styled';

export default function TransactionForm() {
  const dispatch = useDispatch();
  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString()
  );
  const [type, setType] = useState('INCOME');
  const [categoryId, setCategoryId] = useState(
    '063f1132-ba5d-42b4-951d-44011ca46262'
  );
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState(0);

  const switchChange = e => {
    if (e.target.checked) {
      setType('EXPENSE');
      return;
    }
    setType('INCOME');
    setCategoryId('063f1132-ba5d-42b4-951d-44011ca46262');
  };

  const onNumberChange = e => {
    type === 'INCOME'
      ? setAmount(Number(e.target.value))
      : setAmount(Number(e.target.value) * -1);
  };

  const createNewTransaction = () => {
    const objTransaction = {
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
    };
    dispatch(newTransaction(objTransaction));
  };

  return (
    <FormBox>
      <FormGroup>
        <h1>Add transaction</h1>
        <SwitchBox>
          {type === 'INCOME' ? (
            <IncomeActive>Income</IncomeActive>
          ) : (
            <SpanPassive>Income</SpanPassive>
          )}
          <FormControlLabel
            control={
              <PinkSwitch
                inputProps={{ 'aria-label': 'controlled' }}
                {...label}
                size="big"
                onChange={switchChange}
              />
            }
          />
          {type === 'EXPENSE' ? (
            <ExpenseActive>Expense</ExpenseActive>
          ) : (
            <SpanPassive>Expense</SpanPassive>
          )}
        </SwitchBox>
        {type === 'INCOME' ? null : (
          <Categories
            changeCategoryId={setCategoryId}
            categoryId={categoryId}
          />
        )}

        <TextField
          onChange={onNumberChange}
          theme={mainTheme}
          type="number"
          placeholder="0.00"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />

        <BasicDatePicker
          setTransactionDate={setTransactionDate}
          transactionDate={transactionDate}
        />

        <TextField
          onChange={e => {
            setComment(e.target.value);
          }}
          variant="standard"
          label="Comment"
          id="comment"
          name="comment"
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
