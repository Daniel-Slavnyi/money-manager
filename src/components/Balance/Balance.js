import { useSelector } from 'react-redux';

import { BalanceWrapper, BalanceText, BalanceValue } from './Balance.styled';

export const Balance = () => {
  const totalBalance = useSelector(state => state.auth.user.balance);

  return (
    <BalanceWrapper>
      <BalanceText>YOUR BALANCE</BalanceText>
      <BalanceValue>
        ₴ {totalBalance ? totalBalance.toFixed(2) : 0}
      </BalanceValue>
    </BalanceWrapper>
  );
};
