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
  @media screen and (max-width: 1279px) {
    width: 336px;
    height: 182px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 174px;
    margin-top: 30px;
  } ;
`;

export const TableTop = styled.td`
  height: 50px;
  @media screen and (max-width: 1279px) {
    text-align: right;
    padding-right: 25px;
  }
  @media screen and (max-width: 767px) {
    padding-right: 20px;
  } ;
`;
export const TablePurchase = styled.td`
  @media screen and (max-width: 767px) {
    text-align: left;
    padding-left: 24px;
    text-align: center;
  } ;
`;

export const TableArray = styled.td`
  height: 50px;
  @media screen and (max-width: 1279px) {
    height: 40px;
    text-align: right;
    padding-right: 20px;
  }
  @media screen and (max-width: 767px) {
  } ;
`;

export const TableHead = styled.thead`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 60px;
  color: white;
  font-family: 'Circe';
  font-style: normal;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1px;
  @media screen and (max-width: 1279px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const TableBody = styled.tbody`
  color: white;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 1.7;
`;

export const TableRow = styled.tr`
  height: 60%;
  vertical-align: text-top;
  @media screen and (max-width: 1279px) {
    height: 50%;
  }
`;
export const TableRowTop = styled.tr``;
export const Image = styled.img`
  display: block;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media screen and (max-width: 1279px) {
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 93px;
  } ;
`;

export const Background = styled.div`
  position: relative;
  @media screen and (max-width: 1279px) {
  }
  @media screen and (max-width: 767px) {
  } ;
`;

export const TableFirstLetter = styled.td`
  @media screen and (max-width: 1279px) {
    &:nth-child(1) {
      text-align: left;
      padding-left: 20px;
    }
    @media screen and (max-width: 767px) {
      &:nth-child(1) {
        text-align: left;
        padding-left: 20px;
      }
    }
  }
`;

export const TableLeft = styled.td`
  @media screen and (max-width: 1279px) {
    text-align: right;
    padding-right: 20px;
  }
  @media screen and (max-width: 480px) {
  } ;
`;

export const TableCurrency = styled.td`
  @media screen and (max-width: 767px) {
    text-align: left;
    padding-left: 20px;
  } ;
`;
