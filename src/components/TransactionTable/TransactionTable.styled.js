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
  color: '#000000',
  opacity: 1,
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'white',
    borderRadius: '30px',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 700,
    color: 'black',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    justifyContent: 'center',
  },
  '& .MuiDataGrid-cell': {
    justifyContent: 'center',
  },
  '& .MuiDataGrid-footerContainer': {
    justifyContent: 'center',
    minHeight: '25px',
  },
  '& .MuiTablePagination-toolbar': {
    minHeight: '25px',
  },
}));

// ==================== UL for mobile

export const MobileRow = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 18px;
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const MobileItem = styled.li`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const MobileName = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const MobileValue = styled.span`
  font-weight: 400;
  font-size: 16px;
`;

export const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DesktopTable = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 350px;
    width: 700px;
    margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    height: 350px;
    width: 700px;
  }
`;
