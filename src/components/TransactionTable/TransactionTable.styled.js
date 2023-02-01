import styled from '@emotion/styled/macro';
import { DataGrid } from '@mui/x-data-grid';

export const Container = styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const MainTable = styled.table`
  display: flex;
  flex-direction: column;

`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

`;

export const Item = styled.li`
  display: flex;
`;

export const DataGridStyled = styled(DataGrid)(theme => ({
  color: '#000000', opacity: 1,
  '& .MuiDataGrid-columnHeaders' : {
    backgroundColor: 'white',
    borderRadius: '30px',
  },
  '& .MuiDataGrid-columnHeaderTitle' : {
    fontWeight: 700,
    color: 'black'
  }, '& .MuiDataGrid-iconSeparator': {
    display: 'none'
  }, '& .MuiDataGrid-columnHeaderTitleContainer': {
    justifyContent: 'center'
  }, '& .MuiDataGrid-cell': {
    justifyContent: 'center'
  }, '& .MuiDataGrid-footerContainer': {
    justifyContent: 'center'
  }
}));


