import { createTheme } from '@mui/material';
import CirceRegularTtf from './fonts/Circe/Circe-Regular.ttf';
import PoppinsRegularTtf from './fonts/Poppins/Poppins-Regular.ttf';

const theme = createTheme({
  breakpoints: {
    keys: ['phone', 'phablet', 'tablet', 'desktop'],
    values: {
      phone: 320,
      phablet: 480,
      tablet: 768,
      desktop: 1280,
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
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

theme.components = {
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Circe';
          src: url(${CirceRegularTtf}) format('truetype');
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: 'Poppins';
          src: url(${PoppinsRegularTtf}) format('truetype');
          font-style: normal;
          font-weight: 400;
        }
        body {
          background-color: #E7EAF2;
          background-repeat: no-repeat;
          
          display: flex;
          flex-direction: column;
          min-height: 100vh;
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

        [theme.breakpoints.down('phablet')]: {
          maxWidth: '480px',
        },
        [theme.breakpoints.up('phablet')]: {
          width: '480px',
        },
        [theme.breakpoints.up('tablet')]: {
          width: '768px',
          padding: '0 32px',
        },
        [theme.breakpoints.up('desktop')]: {
          width: '1280px',
          padding: '0 18px',
        },
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'mainbutton' },
        style: {
          fontFamily: 'Circe',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '27px',
          textAlign: 'center',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',

          color: theme.palette.colorList.white,
          background: theme.palette.colorList.green,
          paddingTop: '13px',
          paddingBottom: '13px',
          width: '100%',
          marginBottom: '20px',
          borderRadius: '20px',
          '&:hover': {
            background: theme.palette.colorList.grey,
          },
          [theme.breakpoints.up('phablet')]: {
            width: '300px',
          },
        },
      },
      {
        props: { variant: 'secondarybutton' },
        style: {
          fontFamily: 'Circe',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '27px',
          textAlign: 'center',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',

          color: theme.palette.colorList.blue,
          background: theme.palette.colorList.white,
          paddingTop: '13px',
          paddingBottom: '13px',
          width: '100%',
          borderRadius: '20px',
          border: `1px solid ${theme.palette.colorList.blue}`,
          '&:hover': {
            background: theme.palette.colorList.grey,
          },
          [theme.breakpoints.up('phablet')]: {
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
        [theme.breakpoints.up('phablet')]: {
          width: '410px',
        },
      },
    },
  },
};

//typography settings
theme.typography.caption = {
  fontWeight: 200,
};

theme.typography.body1 = {
  htmlFontSize: 16,
  fontFamily: 'Circe',
  fontSize: 14,
  fontWeight: 400,
};
theme.typography.body2 = {
  opacity: 0.6,
};
theme.typography.h1 = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: ' 30px',
  lineHeight: '1.5',
};
theme.typography.h2 = {
  fontSize: '18px',
  fontWeight: 700,
};
theme.typography.h3 = {
  fontSize: '16px',
  fontWeight: 600,
};
theme.typography.button = {
  fontSize: '14px',
  fontWeight: 500,
};

export default theme;
