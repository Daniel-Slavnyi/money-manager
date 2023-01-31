import logoIcon from '../../images/Wallet.svg';
import { LogoLink, LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoImg src={logoIcon} alt="Wallet" />
      Wallet
    </LogoLink>
  );
};
