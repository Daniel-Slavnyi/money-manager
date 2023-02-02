import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const CategoriesBox = styled(Box)(theme => ({
  width: '100%',

  '& .MuiFormControl-fullWidth': {
    width: '100%',
    marginTop: '40px',
  },

  '& .MuiSelect-icon': {
    width: '40px',
    height: '40px',
    top: '10px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      color: '#E0E0E0',
      borderRadius: 0,
      border: 0,
      borderBottom: '1px solid #E0E0E0',
    },
    '& .MuiInputBase-input': {
      padding: '16px 5px',
    },
    '&:hover fieldset': {
      borderColor: '#4A56E2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#24CCA7',
    },
  },
}));
