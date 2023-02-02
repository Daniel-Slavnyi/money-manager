import * as React from 'react';
import Modal from '@mui/material/Modal';

import TransactionForm from 'components/TransactionForm/TransactionForm';
import { ModalBox, OpenModalButton } from './BasicModal.styled';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <OpenModalButton onClick={handleOpen}>+</OpenModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>{open && <TransactionForm onClose={handleClose} />}</ModalBox>
      </Modal>
    </div>
  );
}
