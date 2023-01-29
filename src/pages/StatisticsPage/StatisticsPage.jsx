import Chart from 'components/Chart/Chart';
import React from 'react';
<<<<<<< Updated upstream
import { Balance } from '../../components/Balance/Balance'
=======
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { transactionSummary } from 'redux/transaction/transaction-operation';
>>>>>>> Stashed changes

export default function StatisticsPage() {


  return (
  <>
  <Balance />
  <Chart/>
  </>)
}
