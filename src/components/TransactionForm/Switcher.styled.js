import { styled, Switch } from "@mui/material";


export const PinkSwitch = styled(Switch)(theme => ({
'& .MuiSwitch-root': {
    width: '80px',
    height: '40px',
    borderRadius: '0',
   border: '1px solid #E0E0E0',
   color: 'white'
},


    }
));