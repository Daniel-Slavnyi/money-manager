import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const NavListEl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-bottom: 15px;
  margin-top: 0;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
  }
`;

export const NavItemEl = styled.li``;

export const LinkEl = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Poppins;

  outline: transparent;
  text-decoration: none;

  transition: font-weight, fill 250ms linear;

  &:hover,
  &:hover svg,
  &:focus,
  &:focus svg {
    font-weight: 700;
    fill: #4a56e2;
  }

  &.active,
  &.active svg {
    font-weight: 700;

    fill: #4a56e2;
  }
`;

export const IconWrapperEl = styled.div`
  height: 38px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 23px;
  }
`;

export const SvgEl = styled.svg`
  width: 38px;
  height: 38px;
  fill: #6e78e8;

  ${LinkEl}:hover & {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    background-color: white;
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 23px;
  }
`;

export const TextEl = styled.span`
  display: none;

  color: #000000;

  @media screen and (min-width: 768px) {
    display: block;

    font-size: 18px;
    line-height: 1.5;
  }
`;
