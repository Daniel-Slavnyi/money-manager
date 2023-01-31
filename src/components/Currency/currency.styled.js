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
  width: 393px;
  height: 331px;
  @media screen and (max-width: 1199px) {
    width: 336px;
    height: 182px;
  }
  @media screen and (max-width: 480px) {
    width: 280px;
    height: 174px;
    margin-top: 30px;
  } ;
`;

export const TableTop = styled.td`
  height: 50px;
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 480px) {
  } ;
`;
export const TablePurchase = styled.td``;

export const TableArray = styled.td`
  height: 50px;
  padding-top: 20px;
  @media screen and (max-width: 1199px) {
    padding-top: 12px;
    height: 40px;
  }
  @media screen and (max-width: 480px) {
  } ;
`;

export const TableHead = styled.thead`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  color: white;
  font-family: 'Circe';
  font-style: normal;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TableBody = styled.tbody`
  color: white;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 1.7;
`;

export const TableRow = styled.tr`
  vertical-align: text-top;
  
`;

export const Image = styled.img`
  display: block;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 480px) {
    width: 280px;
    height: 93px;
  } ;
`;

export const Background = styled.div`
  position: relative;
  @media screen and (max-width: 1199px) {
  }
  @media screen and (max-width: 480px) {
  } ;
`;

export const TableFirstLetter = styled.td`
 &:nth-child(1) {
text-align: left;
padding-left: 20px;
}
  
`;

