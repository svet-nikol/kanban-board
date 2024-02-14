import styled, { css } from "styled-components";

export const PopNewCardSt = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopBrowseSt = styled(PopNewCardSt)`
  z-index: 7;
`;

export const PopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopUpBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopUpContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopUpTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopNewCardTtl = styled(PopUpTtl)`
  margin-bottom: 20px;
`;

export const PopNewCardBtnClose = styled.p`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const PopUpWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopUpForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const PopUpFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

const commonInputTextarea = css`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    font-family: "Roboto";
    padding-top: 14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    font-family: "Roboto";
    padding-top: 14px;
  }
`;

export const PopUpFormTextarea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  ${commonInputTextarea}
`;

export const PopUpFormInput = styled.input`
  margin: 20px 0;
  ${commonInputTextarea}
`;