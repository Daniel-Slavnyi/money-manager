import { Header } from 'components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { Section, WrapCurency } from './DashboardPage.styled';
import { useEffect, useState } from 'react';

const StyledDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'flex',
    gap: '32px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const StyledContainer = styled('div')(({ theme }) => ({
  paddingBottom: '51px',
  [theme.breakpoints.up('desktop')]: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 16px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    justifyContent: 'center',
    gap: '102px',
  },
}));

const WrapperContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    width: 'auto',
  },
}));

export default function DashboardPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const isHidden = location.pathname === '/statistic' && screenWidth < 768;
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <Section>
            <WrapperContainer>
              <StyledDiv>
                <div>
                  <Navigation />
                  {!isHidden && <Balance />}
                </div>

                <WrapCurency>
                  <Currency />
                </WrapCurency>
              </StyledDiv>
            </WrapperContainer>
          </Section>
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
