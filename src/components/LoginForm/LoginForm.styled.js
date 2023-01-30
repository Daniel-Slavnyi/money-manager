// import styled from '@emotion/styled/macro';
import { styled, TextField } from '@mui/material';

export const CssTextField = styled(TextField)(theme => ({
  '&:first-of-type': {
    marginTop: '60px',
  },
  width: '100%',

  marginBottom: '40px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      color: '#E0E0E0',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid #E0E0E0',
    },
    '& .MuiInputBase-input': {
      margin: 0,
      // paddingBottom: '8px',
      // paddingTop: '1px',
      // padding: '40px',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
}));
