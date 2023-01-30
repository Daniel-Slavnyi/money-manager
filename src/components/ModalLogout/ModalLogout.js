import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';
import {
  Backdrop,
  ModalWrapper,
  ButtonWrapper,
  ButtonYes,
  ButtonNo,
} from './ModalLogout.slyled';

export const ModalLogout = ({ handleClose }) => {
  const dispatch = useDispatch();

  return (
    <Backdrop>
      <ModalWrapper>
        <p>Are you sure?</p>
        <ButtonWrapper>
          <ButtonYes type="button" onClick={() => dispatch(logOut())}>
            Yes
          </ButtonYes>
          <ButtonNo onClick={() => handleClose()}>No</ButtonNo>
        </ButtonWrapper>
      </ModalWrapper>
    </Backdrop>
  );
};
