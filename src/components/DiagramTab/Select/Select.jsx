import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Arrow from '@mui/icons-material/KeyboardArrowDownRounded';
import { SelectsWrapper } from './Select.styled';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const monthes = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = ['2023', '2022', '2021', '2020'];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelect() {
  // const theme = useTheme();
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);

  const handleMonthChange = event => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setMonth(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleYearChange = event => {
    const {
      target: { value },
    } = event;
    setYear(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <SelectsWrapper>
        <div>
          <FormControl sx={{ m: 1, width: 181 }}>
            {/* <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
            <Select
              placeholder="month"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={month}
              onChange={handleMonthChange}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              IconComponent={Arrow}
              style={{ borderRadius: 50 }}
              sx={{ pr: 20, pl: 20 }}
            >
              {monthes.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 182 }}>
            {/* <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
            <Select
              // labelId="demo-multiple-name-label"
              // id="demo-multiple-name"
              value={year}
              onChange={handleYearChange}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              IconComponent={Arrow}
              style={{ borderRadius: 50 }}
              sx={{ pr: 20, pl: 20 }}
            >
              {years.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </SelectsWrapper>
    </>
  );
}

// import React from 'react';

// export default function Select({ setMonth, setYear }) {
//   const handleChangeMonth = e => {
//     setMonth(e.target.value);
//   };

//   const handleChangeYear = e => {
//     setYear(e.target.value);
//   };

//   return (
//     <>
//       <select onChange={handleChangeMonth} name="month" id="month-select">
//         <option value="01">January</option>
//         <option value="02">February</option>
//         <option value="03">March</option>
//         <option value="04">April</option>
//         <option value="05">May</option>
//         <option value="06">June</option>
//         <option value="07">July</option>
//         <option value="08">August</option>
//         <option value="09">September</option>
//         <option value="10">October</option>
//         <option value="11">November</option>
//         <option value="12">December</option>
//       </select>

//       <select onChange={handleChangeYear} name="year" id="year-select">
//         <option value="2023">2023</option>
//         <option value="2018">2018</option>
//         <option value="2019">2019</option>
//         <option value="2021">2021</option>
//         <option value="2022">2022</option>
//       </select>
//     </>
//   );
// }
