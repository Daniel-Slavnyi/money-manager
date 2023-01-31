// import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { BalanceWrapper, BalanceText, BalanceValue } from './Balance.styled';

export const Balance = () => {
  const totalBalance = useSelector(state => state.transactions.total);

  return (
    <BalanceWrapper>
      <BalanceText>YOUR BALANCE</BalanceText>
      <BalanceValue variant="h1" component="p">
        ₴ {totalBalance ? totalBalance.toFixed(2) : 0}
      </BalanceValue>
      {/* <Typography variant="h1" component="p">
        ₴ {totalBalance ? totalBalance.toFixed(2) : 0}
      </Typography> */}
    </BalanceWrapper>
  );
};
