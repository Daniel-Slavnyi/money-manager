import styled from 'styled-components';

export const TableContainer = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  background: rgba(74, 86, 226, 1);
  overflow: hidden;
  border-radius: 30px;
  position: relative;
  table-layout: fixed;
  width: 400px;
  height: 330px;
`;

export const TableTop = styled.td`
  height: 50px;
`;
export const TablePurchase = styled.td``;

export const TableArray = styled.td`
  height: 50px;
  padding-top: 20px;
`;

export const TableHead = styled.thead`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  color: white;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const TableBody = styled.tbody`
  color: white;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

export const TableRow = styled.tr`
  vertical-align: text-top;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const Background = styled.div`
  position: relative;
`;
