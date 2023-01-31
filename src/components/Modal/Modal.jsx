import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import { OpenModalButton } from './Modal.styled';
import { useTheme } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 508,
  border: 'none',
  boxShadow: 24,
  padding: 0,
  borderRadius: '20px',
};

export default function BasicModal() {
  const theme = useTheme();
  const colors = theme.palette.colorList;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <OpenModalButton sx={{}} onClick={handleOpen}>
        +
      </OpenModalButton>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, bgcolor: colors.white }}>
          <TransactionForm onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
