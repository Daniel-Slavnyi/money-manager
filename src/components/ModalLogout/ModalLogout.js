import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';
import { useEffect } from 'react';
import {
  Backdrop,
  ModalWrapper,
  ButtonWrapper,
  ButtonYes,
  ButtonNo,
} from './ModalLogout.slyled';

export const ModalLogout = ({ handleClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const closeModal = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [handleClose]);

  return (
    <Backdrop onClick={() => handleClose()}>
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
