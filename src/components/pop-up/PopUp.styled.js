import styled, { css } from "styled-components";
import { breakpoints } from "../../lib/breakpoints";
import { themeStyles } from "../../lib/themes";

export const PopNewCardSt = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: fit-content;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  @media (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
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
  @media (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media (max-width: ${breakpoints.md}px) {
    padding: 0;
    justify-content: flex-start;
  }
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
  @media (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }
  @media (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;

export const PopUpContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopUpTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
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

const commonThemesForTopics = css`
  display: block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};
`;

export const PopUpThemeTextUp = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const PopUpThemeUp = styled.div`
  opacity: 0.4;
  opacity: 1 !important;
  ${commonThemesForTopics}
  ${PopUpThemeTextUp} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  }
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`;

export const PopUpStatusBlock = styled.div`
  margin-bottom: 11px;
`;

export const PopUpStatusTtl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopUpStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopUpStatusThemeWrap = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  ${themeStyles._gray}
`;

export const PopUpStatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  ${themeStyles._gray}
`;

export const PopUpWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: ${breakpoints.lg}px) {
    display: block;
  }
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

export const PopUpFormLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
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

export const PopNewCardTopicsBlock = styled.div`
  margin-bottom: 20px;
`;

export const PopNewCardTopicsTtl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const PopNewCardTopicsBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopNewCardTopicLabel = styled.label`
  ${commonThemesForTopics}
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  input[type="radio"]:checked ~ & {
    opacity: 1;
  }
`;
export const PopExitSt = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  &:target {
    display: block;
  }
`;

export const PopExitContainer = styled.div`
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

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  @media (max-width: ${breakpoints.sm}px) {
    padding: 50px 20px;
  }
`;

export const PopExitTtl = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`;
