import React from "react";
import { sizes } from "../constants/styles";
import styled from "styled-components";

const Bottom = styled.div`
  z-index: 1;
  flex-grow: 1;
  background-color: ${(props) => props.theme.bg};
  border-radius: ${sizes.lg} ${sizes.lg} 0 0;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
`;

const BottomCard = ({ children }) => {
  return <Bottom>{children}</Bottom>;
};

export default BottomCard;
