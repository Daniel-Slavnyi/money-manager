import { useSelector } from 'react-redux';
import { getTotalBalance } from '../../redux/transaction/transaction-selector';

import { BalanceWrapper, BalanceText, BalanceValue } from './Balance.styled';

export const Balance = () => {
  const totalBalance = useSelector(getTotalBalance);

  return (
    <BalanceWrapper>
      <BalanceText>YOUR BALANCE</BalanceText>
      <BalanceValue>₴ {totalBalance ? totalBalance : 0}</BalanceValue>
    </BalanceWrapper>
  );
};
