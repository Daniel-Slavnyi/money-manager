import styled from '@emotion/styled/macro';


export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  @media screen and (min-width: 768px) {
 
}
@media screen and (min-width: 1280px) {
 
}
`;

export const SubmitingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px;
    @media screen and (min-width: 768px) {
      width: 508px;
    padding: 40px 70px;
}
@media screen and (min-width: 768px) {
  width: 508px;
    padding: 40px 70px;
}
`;

export const FormTitle = styled.h1`
  font-size: 30px;
`;

export const SumAndDateBox = styled.div`
margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  display: flex;
  width: 100%;
}
@media screen and (min-width: 1280px) {
  margin-top: 40px;
  display: flex;
  width: 100%;
}
`;

export const SwitchBox = styled.div`
margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IncomeActive = styled.span`
margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #24cca7;
`;

export const ExpenseActive = styled.span`
margin-left: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ff6596;
`;

export const SpanPassive = styled.span`
margin-left: 20px;
margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
`;



