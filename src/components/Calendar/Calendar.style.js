import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const CalendarWrap = styled.div`
  width: 100%;
  width: 168px;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.lg}px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  @media (max-width: ${breakpoints.lg}px) {
    padding: 0;
  }
`
