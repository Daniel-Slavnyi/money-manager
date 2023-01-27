import { createTheme } from '@mui/material';
import CirceRegular from './fonts/Circe/Circe-Regular.ttf';
import PoppinsRegular from './fonts/Poppins/Poppins-Regular.ttf';

const mainTheme = createTheme({
  breakpoints: {
    keys: ['phone', 'phablet', 'tablet', 'desktop'],
    values: {
      phone: 320,
      phablet: 480,
      tablet: 768,
      desktop: 1440,
    },
  },
  palette: {
    colorList: {
      black: '#000000',
      grey: '#BDBDBD',
      white: '#FFFFFF',
      green: '#24CCA7',
      blue: '#4A56E2',
    },
    // primary: {
    //   main: '#839364',
    //   light: '#BDBDBD',
    //   contrastText: '#FFFFFF',
    // },
    // background: {
    //   default: '#FFFFFF',
    //   green: '#839364',
    // },
    // text: {
    //   primary: '#000000',
    // },
    // secondary: {
    //   main: '#FFFFFF',
    // },
    // error: {
    //   main: '#49012E',
    // },
  },
  typography: {
    fontFamily: ['CirceRegular', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 30,
    },
    a: {
      fontFamily: ['CirceRegular', 'sans-serif'].join(','),
      fontSize: 12,
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

mainTheme.components = {
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'CirceRegular';
          src: url(${CirceRegular}) format('truetype');
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: 'CirceRegular';
          src: url(${PoppinsRegular}) format('truetype');
          font-style: normal;
          font-weight: 400;
        }
      `,
  },
  MuiContainer: {
    defaultProps: {
      sx: {
        // Якщо ширина екрану більше (up) брейкпоінта desktop, то паддінг = ...
        // Якщо ширина екрану менша (down) брейкпоінта desktop, то паддінг = ...
        margin: '0 auto',
        padding: '0 20px',

        [mainTheme.breakpoints.down('phablet')]: {
          maxWidth: '480px',
        },
        [mainTheme.breakpoints.up('phablet')]: {
          width: '480px',
        },
        [mainTheme.breakpoints.up('tablet')]: {
          width: '768px',
          padding: '0 32px',
        },
        [mainTheme.breakpoints.up('desktop')]: {
          width: '1280px',
          padding: '0 188px',
        },
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'mainbutton' },
        style: {
          color: mainTheme.palette.colorList.white,
          background: mainTheme.palette.colorList.green,
          paddingTop: '13px',
          paddingBottom: '13px',
          width: '100%',
          marginBottom: '20px',
          borderRadius: '20px',
          '&:hover': {
            background: mainTheme.palette.colorList.lightgreen,
          },
          [mainTheme.breakpoints.up('phablet')]: {
            width: '300px',
          },
        },
      },
      {
        props: { variant: 'secondarybutton' },
        style: {
          color: mainTheme.palette.colorList.blue,
          background: mainTheme.palette.colorList.white,
          paddingTop: '13px',
          paddingBottom: '13px',
          width: '100%',
          borderRadius: '20px',
          border: `1px solid ${mainTheme.palette.colorList.blue}`,
          '&:hover': {
            background: mainTheme.palette.colorList.lightgreen,
          },
          [mainTheme.breakpoints.up('phablet')]: {
            width: '300px',
          },
        },
      },
    ],
    defaultProps: {
      variant: 'mainbutton',
      // size: 'medium',
    },
  },

  MuiTextField: {
    defaultProps: {
      sx: {
        color: mainTheme.palette.colorList.grey,
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '27px',
        width: '100%',
        marginBottom: '40px',
        [mainTheme.breakpoints.up('phablet')]: {
          width: '410px',
        },
      },
    },
  },
};

export default mainTheme;
