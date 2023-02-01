import * as React from 'react';

import moment from 'moment/moment';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Arrow from '@mui/icons-material/KeyboardArrowDownRounded';
import { OutlinedInput, styled } from '@mui/material';

import { SelectsWrapper } from './Select.styled';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('tablet')]: {},
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  borderRadius: '50px',
  height: '50',
  [theme.breakpoints.up('tablet')]: {
    width: '160px',
  },
}));

export default function SelectSmall({ setMonth, month, setYear, year }) {
  const ITEM_HEIGHT = 35;
  const ITEM_PADDING_TOP = 4;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 182,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        boxSshadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: 25,
      },
    },
  };

  const handleMonthChange = event => {
    setMonth(event.target.value);
  };

  const handleYearChange = event => {
    setYear(event.target.value);
  };

  return (
    <SelectsWrapper>
      <StyledFormControl
        sx={{ m: 1, minWidth: 120, backgroundColor: 'transparent' }}
      >
        <StyledSelect
          value={moment(month).format('MM')}
          label="Month"
          IconComponent={Arrow}
          onChange={handleMonthChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
        >
          <MenuItem value={'01'}>January</MenuItem>
          <MenuItem value={'02'}>February</MenuItem>
          <MenuItem value={'03'}>March</MenuItem>
          <MenuItem value={'04'}>April</MenuItem>
          <MenuItem value={'05'}>May</MenuItem>
          <MenuItem value={'06'}>June</MenuItem>
          <MenuItem value={'07'}>July</MenuItem>
          <MenuItem value={'08'}>August</MenuItem>
          <MenuItem value={'09'}>September</MenuItem>
          <MenuItem value={'10'}>October</MenuItem>
          <MenuItem value={'11'}>November</MenuItem>
          <MenuItem value={'12'}>December</MenuItem>
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl
        sx={{ m: 1, minWidth: 120, backgroundColor: 'transparent' }}
      >
        <StyledSelect
          value={moment(year).format('YYYY')}
          label="Year"
          IconComponent={Arrow}
          onChange={handleYearChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
        >
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2021'}>2021</MenuItem>
          <MenuItem value={'2022'}>2022</MenuItem>
          <MenuItem value={'2023'}>2023</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </SelectsWrapper>
  );
}
