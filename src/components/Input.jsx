import { global, sizes } from "../constants/styles";

import HiddenText from "./HiddenText";
import React from "react";
import styled from "styled-components";

const InputLabel = styled.label`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

const InputField = styled.input`
  border-radius: 1rem;
  padding: ${sizes.xs} 0;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bg};
  border: none;
  text-align: center;
  font-size: ${sizes.base};
  font-family: ${global.bodyFamily};
  border: ${(props) => props.showBorder && `1px solid ${props.theme.text}`};
  flex-grow: 1;
  max-width: 100%;
`;

const Input = ({
  label,
  value,
  handleChange,
  type = "text",
  name,
  showBorder = false,
}) => {
  return (
    <InputLabel>
      {label && <HiddenText>{label}</HiddenText>}
      <InputField
        showBorder={showBorder}
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        autoComplete="off"
      />
    </InputLabel>
  );
};

export default Input;
