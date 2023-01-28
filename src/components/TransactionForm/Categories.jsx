import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'redux/transaction/transaction-selector';
import { useEffect } from 'react';
import { getCategories } from 'redux/transaction/transaction-operation';
import { useState } from 'react';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

export default function Categories({changeCategoryId}) {
  const [chosenCategory, setChosenCategory] = useState('');
  const logedIn = useSelector(selectIsLoggedIn)
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!logedIn) return;
    dispatch(getCategories());
  }, [dispatch, logedIn]);

  const handleChange = event => {
    setChosenCategory(event.target.value);
  };

  useEffect(() => {changeCategoryId(chosenCategory)}, [chosenCategory, changeCategoryId])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="categories-label">Select a category</InputLabel>
        <Select
          labelId="categories-label"
          id="categories"
          value={chosenCategory}
          label="Select a category"
          onChange={handleChange}
        >
          {Array.isArray(categories) &&
            categories.map(category => (
              <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
