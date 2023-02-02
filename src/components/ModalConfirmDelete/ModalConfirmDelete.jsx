import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import mainTheme from 'styles/theme';
import { useDispatch } from 'react-redux';

import { deleteTransaction } from 'redux/transaction/transaction-operation';
import { ConfirmTitle, Container } from './ModalConfirmDelete.styled';
import { EditDeleteButton } from 'components/EditModal/EditModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  borderRadius: '20px',
};

export default function ModalConfirmDelete({ params }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTransaction(params.row.id));
    console.log(params);
  };

  return (
    <div>
      <EditDeleteButton sx={{ marginLeft: '10px' }} onClick={handleOpen}>
        <DeleteForeverSharpIcon fontSize="small" color="warning" />
      </EditDeleteButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <ConfirmTitle>{`Are you sure you want to delete transaction '${params.row.comment}'?`}</ConfirmTitle>
            <Button theme={mainTheme} variant="mainbutton" onClick={deleteItem}>
              DELETE
            </Button>
            <Button
              theme={mainTheme}
              variant="secondarybutton"
              onClick={handleClose}
            >
              CANCEL
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
