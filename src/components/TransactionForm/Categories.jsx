import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { selectCategories } from 'redux/transaction/transaction-selector';
import { getCategories } from 'redux/transaction/transaction-operation';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

export default function Categories({ changeCategoryId, categoryId }) {
  const logedIn = useSelector(selectIsLoggedIn);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!logedIn) return;
    dispatch(getCategories());
  }, [dispatch, logedIn]);

  const handleChange = event => {
    changeCategoryId(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="categories-label">Select a category</InputLabel>
        <Select
          labelId="categories-label"
          id="categories"
          label="Select a category"
          value={categoryId}
          onChange={handleChange}
        >
          {Array.isArray(categories) &&
            categories.map(category => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
