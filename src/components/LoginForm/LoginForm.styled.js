import { styled, TextField } from '@mui/material';

export const CssTextField = styled(TextField)(theme => ({
  color: '#E0E0E0',

  width: '100%',
  '&:first-of-type': {
    marginTop: '60px',
  },
  '&:last-of-type': {
    marginBottom: '40px',
  },
  '& label.Mui-focused': {
    color: '#24CCA7',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#24CCA7',
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
      marginLeft: '20px',
    },
    '&:hover fieldset': {
      borderColor: '#4A56E2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#24CCA7',
    },
  },
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [theme.breakpoints.up('desktop')]: {},
}));
