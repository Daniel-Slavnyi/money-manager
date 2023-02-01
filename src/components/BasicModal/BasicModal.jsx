import * as React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import TransactionForm from 'components/TransactionForm/TransactionForm';

import { OpenModalButton } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 508,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  padding: 0,
  borderRadius: '20px',
};

export default function BasicModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <OpenModalButton onClick={handleOpen}>
        +
      </OpenModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {open && <TransactionForm onClose={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
}
