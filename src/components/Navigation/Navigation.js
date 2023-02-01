import Media from 'react-media';
import sprite from '../../images/sprite.svg';
import { mediaScreen } from '../../utils/constants';
import {
  NavListEl,
  NavItemEl,
  LinkEl,
  IconWrapperEl,
  SvgEl,
  TextEl,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavListEl>
      <NavItemEl>
        <LinkEl to="/home">
          <IconWrapperEl>
            <SvgEl>
              <use href={`${sprite}#icon-home`}></use>
            </SvgEl>
          </IconWrapperEl>
          <TextEl>Home</TextEl>
        </LinkEl>
      </NavItemEl>
      <NavItemEl>
        <LinkEl to="/statistic">
          <IconWrapperEl>
            <SvgEl>
              <use href={`${sprite}#icon-statistic`}></use>
            </SvgEl>
          </IconWrapperEl>
          <TextEl>Statistics</TextEl>
        </LinkEl>
      </NavItemEl>
      <Media queries={mediaScreen}>
        {matches =>
          (matches.mobile || matches.response) && (
            <NavItemEl>
              <LinkEl to="/currency">
                <IconWrapperEl>
                  <SvgEl>
                    <use href={`${sprite}#icon-wallet`}></use>
                  </SvgEl>
                </IconWrapperEl>
              </LinkEl>
            </NavItemEl>
          )
        }
      </Media>
    </NavListEl>
  );
};
