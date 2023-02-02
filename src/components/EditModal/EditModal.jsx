import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

import TransactionForm from 'components/TransactionForm/TransactionForm';
import { EditDeleteButton } from './EditModal.styled';

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

export default function EditModal({ params }) {
  const [editOpen, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);
  return (
    <div>
      <EditDeleteButton onClick={handleOpen}>
        <ModeEditOutlineRoundedIcon fontSize="small" color="info" />
      </EditDeleteButton>
      <Modal
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {editOpen && (
            <TransactionForm
              params={params}
              editOpen={editOpen}
              onClose={handleClose}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
