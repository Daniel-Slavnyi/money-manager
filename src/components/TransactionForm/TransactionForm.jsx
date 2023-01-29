import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormControlLabel } from '@mui/material';
import { Button, TextField } from '@mui/material';

import BasicDatePicker from './BasicDatePicker';
import Categories from './Categories';
import { label, PinkSwitch } from 'components/TransactionForm/Switcher';
import { newTransaction } from 'redux/transaction/transaction-operation';

import mainTheme from 'styles/theme';
import {
  ExpenseActive,
  FormBox,
  FormTitle,
  IncomeActive,
  SpanPassive,
  SubmitingForm,
  SumAndDateBox,
  SwitchBox,
} from './TransactionForm.styled';
import { refreshUser } from 'redux/auth/auth-operation';

export default function TransactionForm({ onClose }) {
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
      setAmount(-Math.abs(amount));
      return;
    }
    setType('INCOME');
    setAmount(Math.abs(amount));
    setCategoryId('063f1132-ba5d-42b4-951d-44011ca46262');
  };

  const onNumberChange = e => {
    type === 'INCOME'
      ? setAmount(Math.abs(Number(e.target.value)))
      : setAmount(-Math.abs(Number(e.target.value)));
  };

  const createNewTransaction = e => {
    e.preventDefault();
    const objTransaction = {
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
    };
    dispatch(newTransaction(objTransaction));
    dispatch(refreshUser());
  };

  return (
    <FormBox>
      <SubmitingForm onSubmit={createNewTransaction}>
        <FormTitle>Add transaction</FormTitle>
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
        <SumAndDateBox>
          <TextField
            onChange={onNumberChange}
            theme={mainTheme}
            type="number"
            placeholder="0.00"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{ width: '190px' }}
          />
          <BasicDatePicker
            setTransactionDate={setTransactionDate}
            transactionDate={transactionDate}
          />
        </SumAndDateBox>

        <TextField
          onChange={e => {
            setComment(e.target.value);
          }}
          variant="standard"
          label="Comment"
          id="comment"
          name="comment"
        />

        <Button theme={mainTheme} variant="mainbutton" type="submit">
          ADD
        </Button>

        <Button onClick={onClose} theme={mainTheme} variant="secondarybutton">
          CANCEL
        </Button>
      </SubmitingForm>
    </FormBox>
  );
}
