import React from "react";
import { colors } from "../constants/styles";
import styled from 'styled-components';

const RoundedTag = styled.button`
    padding: .75rem 1.75rem;
    border: 1px solid ${colors.light};
    border-radius: 2rem;
    border-color: ${props => props.selected ? colors.dark : colors.light};
    cursor: pointer;

    &:hover {
        background-color: ${colors.medium};
    }
`

const Tag = ({ children, handleClick, selected = false }) => {
  return <RoundedTag selected={selected} onClick={handleClick}>{children}</RoundedTag>;
};

export default Tag;
