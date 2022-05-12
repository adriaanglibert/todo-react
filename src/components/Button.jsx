import { colors, global, sizes } from "../constants/styles";

import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 1rem;
  padding: ${sizes.xs} ${sizes.md};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.accent};
  color: ${colors.light};
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  border: none;
  text-align: center;
  font-size: ${sizes.sm};
  font-family: ${global.bodyFamily};
  margin: ${(props) => props.margin};
`;

const Button = ({ children, margin }) => {
  return <Btn margin={margin}>{children}</Btn>;
};

export default Button;
