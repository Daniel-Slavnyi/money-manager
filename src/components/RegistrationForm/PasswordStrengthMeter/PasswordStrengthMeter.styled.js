import { styled } from '@mui/material';

export const StrengthWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('tablet')]: {
    width: '409px',
  },
}));

export const BarBackgroundDiv = styled('div')(({ theme }) => ({
  height: '10px',
  width: '100%',
  backgroundColor: [theme.palette.colorList.lightgrey],
  borderRadius: '5px',
}));

export const BarProgress = styled('div')(({ theme }) => ({
  height: '100%',
  borderRadius: '5px',
}));
