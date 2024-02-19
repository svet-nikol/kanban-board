import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints.js";
import { Link } from "react-router-dom";

export const ButtonAutoWidth = styled.button`
  display: flex;
  padding: 10px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
  &:hover {
    background-color: #33399b;
    border: 0.7px solid #33399b;
    color: #ffffff;
  }
  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
  }
`;

export const ButtonAutoWidthBgFill = styled(ButtonAutoWidth)`
  background: var(--Palette-Navy-60, #565eef);
  color: #ffffff;
  &:hover {
    background-color: #33399b;
    border: 0.7px solid #33399b;
  }
`;

export const LinkButtonFixWidth = styled(Link)`
  width: 72px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &:hover {
    background-color: #33399b;
    border: 0.7px solid #33399b;
    color: #ffffff;
  }
`;

export const LinkButtonFixWidthBgFill = styled(Link)`
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const LinkButtonFixWidthTransparent = styled(LinkButtonFixWidthBgFill)`
  background-color: transparent;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  color: #565eef;
  margin-right: 0px;
`;

export const LinkButtonBgFill_153 = styled(LinkButtonFixWidthBgFill)`
  width: 153px;
  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;

export const LinkButtonTransparent_153 = styled(LinkButtonFixWidthTransparent)`
  width: 153px;
  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const LinkButtonBgFillAutoW = styled(Link)`
  height: 30px;
  padding: 10px 14px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #33399b;
    border: 0.7px solid #33399b;
    color: #ffffff;
  }
`;
