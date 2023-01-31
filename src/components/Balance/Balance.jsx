// import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { BalanceWrapper, BalanceText, BalanceValue } from './Balance.styled';
import { balanceFormat }  from '../../utils/balanceFormat';


export const Balance = () => {
  const totalBalance = useSelector(state => state.transactions.total);

  return (
    <BalanceWrapper>
      <BalanceText>YOUR BALANCE</BalanceText>
      <BalanceValue>
        ₴ {totalBalance ? balanceFormat(totalBalance.toFixed(2)) : 0}
      </BalanceValue>
    </BalanceWrapper>
  );
};
