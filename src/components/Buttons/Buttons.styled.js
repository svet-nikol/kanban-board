import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints.js";

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
`;

export const ButtonAutoWidthBgFill = styled(ButtonAutoWidth)`
  background: var(--Palette-Navy-60, #565eef);
  color: #ffffff;
  &:hover {
    background-color: #33399b;
    border: 0.7px solid #33399b;
  }
`;

// const sizes = {
//   small: {
//     fontSize: "0.8em",
//     padding: "5px 10px",
//   },
//   medium: {
//     fontSize: "1em",
//     padding: "10px 20px",
//   },
//   large: {
//     fontSize: "1.2em",
//     padding: "15px 30px",
//   },
// };

// const fadeIn = keyframes`
// from {
// opacity: 0;
// }
// to {
// opacity: 1;
// }
// `;

// export const Button = styled.button`
//   background-color: ${(props) => (props.$highlighted ? "yellow" : "#4caf50")};
//   color: ${(props) => (props.$highlighted ? "red" : "white")};
//   padding: ${(props) => sizes[props.$size]?.padding || sizes.small.padding};
//   font-size: ${(props) => sizes[props.$size]?.fontSize || sizes.small.fontSize};
//   border: none;
//   border-radius: 3px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.$highlighted ? "orange" : "#45a049")};
//   }

//   animation: ${fadeIn} 3s ease-in;
// `;

// export const DangerButton = styled(Button)`
//   background-color: red;
//   &:hover {
//     background-color: darkred;
//   }
// `;
// export default Button;

export const Button = styled.button`
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  @media (max-width: ${breakpoints.sm}px) {
    width: 343px;
    height: 40px;
    line-height: 150%;
  }
`;