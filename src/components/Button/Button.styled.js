import styled, { keyframes } from "styled-components";

const sizes = {
  small: {
    fontSize: "0.8em",
    padding: "5px 10px",
  },
  medium: {
    fontSize: "1em",
    padding: "10px 20px",
  },
  large: {
    fontSize: "1.2em",
    padding: "15px 30px",
  },
};

const fadeIn = keyframes`
from {
opacity: 0;
}
to {
opacity: 1;
}
`;

export const Button = styled.button`
  background-color: ${(props) => (props.$highlighted ? "yellow" : "#4caf50")};
  color: ${(props) => (props.$highlighted ? "red" : "white")};
  padding: ${(props) => sizes[props.$size]?.padding || sizes.small.padding};
  font-size: ${(props) => sizes[props.$size]?.fontSize || sizes.small.fontSize};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$highlighted ? "orange" : "#45a049")};
  }

  animation: ${fadeIn} 3s ease-in;
`;

export const DangerButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: darkred;
  }
`;
export default Button;
