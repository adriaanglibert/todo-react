import HiddenText from "./HiddenText";
import React from "react";
import { colors } from "../constants/styles";
import styled from "styled-components";

const IconContainer = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: ${(props) => props.color ?? colors.dark};
  cursor: pointer;
  margin: ${(props) => props.margin};

  svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
  }
`;

const IconButton = ({
  children,
  icon,
  handleClick,
  size = "1.5rem",
  color,
  margin,
}) => {
  return (
    <IconContainer
      margin={margin}
      color={color}
      size={size}
      onClick={handleClick}
    >
      {icon}
      <HiddenText>{children}</HiddenText>
    </IconContainer>
  );
};

export default IconButton;
