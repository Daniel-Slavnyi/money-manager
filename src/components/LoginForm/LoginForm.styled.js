import { styled, TextField } from '@mui/material';

export const CssTextField = styled(TextField)(theme => ({
  color: '#E0E0E0',

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
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));
