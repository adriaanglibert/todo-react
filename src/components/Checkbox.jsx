import { colors, global, sizes } from "../constants/styles";

import React from "react";
import styled from "styled-components";

const CheckboxLabel = styled.span`
  display: inline-block;
  margin-left: ${sizes.base};
  font-family: ${global.displayFamily};
  font-weight: bold;
  position: relative;
  top: 6px;
  flex-grow: 1;
`;

const CheckboxContainer = styled.label`
  display: flex;
  vertical-align: middle;
  margin-right: ${sizes.sm};
  flex-grow: 1;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${sizes.md};
  height: ${sizes.md};
  background: ${(props) => (props.checked ? colors.primary : colors.light)};
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;

const Checkbox = ({ handleChange, className, checked, label, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox onChange={handleChange} checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox;
