import Media from 'react-media';
import sprite from '../../images/sprite.svg';
import { mediaScreen } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import { NavItem, IconWrapper, TextEl, SvgEl } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavItem>
      <li>
        <NavLink to="/" className={css.navLink}>
          <IconWrapper>
            <SvgEl>
              <use href={`${sprite}#icon-home`}></use>
            </SvgEl>
          </IconWrapper>
          <TextEl>Home</TextEl>
        </NavLink>
      </li>
      <li>
        <NavLink to="statistics" className={css.navLink}>
          <IconWrapper>
            <SvgEl>
              <use href={`${sprite}#icon-statistic`}></use>
            </SvgEl>
          </IconWrapper>
          <TextEl>Statistics</TextEl>
        </NavLink>
      </li>
      <Media queries={mediaScreen}>
        {matches =>
          (matches.mobile || matches.response) && (
            <li>
              <NavLink to="wallet" className={css.navLink}>
                <IconWrapper>
                  <SvgEl>
                    <use href={`${sprite}#icon-wallet`}></use>
                  </SvgEl>
                </IconWrapper>
              </NavLink>
            </li>
          )
        }
      </Media>
    </NavItem>
  );
};
