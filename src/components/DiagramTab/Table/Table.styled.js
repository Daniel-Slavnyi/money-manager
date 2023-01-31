import styled from '@emotion/styled/macro';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 12px 24px 0 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const CaptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
  padding: 16px 19px;
  background: #ffffff;
  border-radius: 30px;
`;

export const SpanCaption = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
`;

export const ColorWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ColorBox = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 2px;
`;

export const SummaryTable = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px  0 24px;
 
 /* gap: 14px; */
  /* &:not(:last-child) {
    margin-bottom: 14px;
  } */
`;

export const Transaction = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
`;

export const Expenses = styled.span`
  margin-top: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #ff6596;
`;

export const Income = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #24cca7;
`;
