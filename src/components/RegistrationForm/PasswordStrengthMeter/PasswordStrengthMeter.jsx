import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import {
  BarBackgroundDiv,
  BarProgress,
  StrengthWrapper,
} from './PasswordStrengthMeter.styled';

export const PasswordStrengthMeter = ({ password }) => {
  let strength = 0;

  const theme = useTheme();
  const colors = theme.palette.colorList;

  const calculateStrength = password => {
    if (!password) return strength;
    if (password.length < 8) return (strength = 1);
    if (password.length >= 8 && password.length <= 10) strength = 2;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
      strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
    return strength;
  };

  strength = calculateStrength(password);
  if (strength > 4) {
    strength = 4;
  }
  console.log(strength);
  return (
    <StrengthWrapper>
      <BarBackgroundDiv>
        <BarProgress
          sx={{
            width: `${strength * 25}%`,
            backgroundColor:
              strength === 0
                ? 'lightgray'
                : strength === 1
                ? 'red'
                : strength === 2
                ? 'orange'
                : strength === 3
                ? 'yellow'
                : `${colors.green}`,
          }}
        />
      </BarBackgroundDiv>
      <Typography variant="body1" sx={{ marginTop: '15px' }}>
        {strength === 0
          ? 'Weak'
          : strength === 1
          ? 'Fair'
          : strength === 2
          ? 'Good'
          : strength === 3
          ? 'Strong'
          : 'Very Strong'}
      </Typography>
    </StrengthWrapper>
  );
};

export default PasswordStrengthMeter;
