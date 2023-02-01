import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormControlLabel } from '@mui/material';
import { Button, TextField } from '@mui/material';

import BasicDatePicker from './BasicDatePicker';
import Categories from './Categories';

import {
  updateTransaction,
  newTransaction,
} from 'redux/transaction/transaction-operation';

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

import { selectCategories, selectError } from 'redux/transaction/transaction-selector';
import moment from 'moment';
import { Notify } from 'notiflix';
import { PinkSwitch } from './Switcher.styled';

export default function TransactionForm({ onClose, editOpen, params }) {
  const categories = useSelector(selectCategories)
  const dispatch = useDispatch();
  const [transactionDate, setTransactionDate] = useState(
    editOpen ? (moment(params.row.transactionDate, 'DD.MM.YY').toISOString()) : new Date().toISOString('DD.MM.YY')
  );

  const [type, setType] = useState( editOpen ? params.row.type : 'INCOME');
  const [categoryId, setCategoryId] = useState(editOpen ? params.row.categoryId :
    '063f1132-ba5d-42b4-951d-44011ca46262'
  );
  const [comment, setComment] = useState(editOpen ? params.row.comment : '');
  const [amount, setAmount] = useState(editOpen ? params.row.amount : '');
  const error = useSelector(selectError);

  const switchChange = e => {
    if (e.target.checked) {
      setType('EXPENSE');
      setCategoryId(categories[0].id)
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
    if(comment.trim() === ('') ){Notify.failure('Leave some comment!')
    return}
    if(amount === 0){Notify.failure('Transaction cannot be 0!')
  return}
    dispatch(newTransaction(objTransaction))
  error === null && onClose()
  };

  const saveEditChanges = () => {
    const id = params.row.id;
    const objTransaction = {
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
      id
    };
    if(amount === 0 ){Notify.failure('Transaction cannot be 0!')
    return}
    if(comment.trim() === ('') ){Notify.failure('Leave some comment!')
    return}
    dispatch(updateTransaction(objTransaction));
    error === null && onClose()
  };

  return (
    <FormBox>
      <SubmitingForm onSubmit={createNewTransaction}>
        {editOpen ? (
          <FormTitle>Edit your transaction</FormTitle>
        ) : (
          <FormTitle>Add transaction</FormTitle>
        )}
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
                size="big"
                onChange={switchChange}
                checked={type === 'INCOME' ? false : true}
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
            required
            onChange={onNumberChange}
            theme={mainTheme}
            type="number"
            value={amount}
            placeholder="0.00"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{ width: '190px' }}
          />
          <BasicDatePicker
            required
            setTransactionDate={setTransactionDate}
            transactionDate={transactionDate}
            value={transactionDate}
          />
        </SumAndDateBox>

        <TextField
          onChange={e => {
            setComment(e.target.value);
          }}
          variant="standard"
          value={comment}
          label="Comment"
          id="comment"
          name="comment"
          required
        />

        {editOpen ? (
          <>
            {' '}
            <Button
              onClick={saveEditChanges}
              theme={mainTheme}
              variant="mainbutton"
              type="button"
            >
              SAVE CHANGES
            </Button>
            <Button
              onClick={onClose}
              theme={mainTheme}
              variant="secondarybutton"
            >
              CANCEL
            </Button>
          </>
        ) : (
          <>
            {' '}
            <Button theme={mainTheme} variant="mainbutton" type="submit">
              ADD
            </Button>
            <Button
              onClick={onClose}
              theme={mainTheme}
              variant="secondarybutton"
            >
              CANCEL
            </Button>
          </>
        )}
      </SubmitingForm>
    </FormBox>
  );
}
