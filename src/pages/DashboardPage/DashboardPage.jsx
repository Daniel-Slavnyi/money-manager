import { Header } from 'components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { WrapCurency } from './DashboardPage.styled';


const StyledDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'flex',
    gap: '32px'
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    flexDirection: 'column'
  },
}));


const StyledContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    boxSizing: 'border-box',
    display: 'flex',
   justifyContent:'center',
    padding: '0 16px'

  },
}));


const WrapperContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
  width: 'auto'

  },
}));

export default function DashboardPage() {
  return (
<>
      <Header />
      <main>
        <StyledContainer>
     
        <section>
          <WrapperContainer>
            <StyledDiv>
              <div>
                <Navigation />
                <Balance />
              </div>

              <WrapCurency>
                <Currency />
              </WrapCurency>
            </StyledDiv>
          </WrapperContainer>
        </section>
        <section>
          <WrapperContainer>
            <Outlet />
          </WrapperContainer>
        </section>
        </StyledContainer>
      </main>
  </>
  );
}
