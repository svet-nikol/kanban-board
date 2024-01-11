import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints.js";

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContentSt = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: ${breakpoints.xl}px) {
    display: block;
  }
`;