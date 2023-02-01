import { Container, styled } from '@mui/material';
export const LogoContainer = styled('div')({
  marginTop: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [theme.breakpoints.up('tablet')]: {
    backgroundColor: 'white',
    borderRadius: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: '62px',
  },

  [theme.breakpoints.up('desktop')]: {
    marginLeft: '180px',
  },
}));

export const PictureWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    marginTop: '60px',
    marginBottom: '50px',
    width: '261px',
    height: '250px',
  },

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
  [theme.breakpoints.up('desktop')]: {
    marginBottom: '28px',
    width: '436px',
    height: '420px',
  },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    padding: '0 118px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    padding: '0 76px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export const PictureTextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'column',
  },
}));

export const BlurWrapper = styled('div')(({ theme }) => ({
  // backdropFilter: 'blur(25px)',
  height: '100%',
}));
