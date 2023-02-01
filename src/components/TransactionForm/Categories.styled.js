import { styled } from '@mui/material';
import Box from '@mui/material/Box';


export const CategoriesBox = styled(Box)(theme => ({
'& .MuiSelect-select': {
    width: '394px'
},
'& .MuiSelect-icon': {
width: '40px',
height: '40px',
top: 'center',
},
'& .MuiOutlinedInput-root': {
    borderStyle: 'none'
}
}))

