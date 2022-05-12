import { Link, NavLink } from "react-router-dom";
import { colors, sizes } from "../constants/styles";

import { ROUTES } from "../constants/routes";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  background: ${colors.secondary};
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`;

const NavItem = styled.li`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.secondary};
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        {Object.keys(ROUTES).map((route) => (
          <NavItem key={route}>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={ROUTES[route]}
            >
              {route.toLowerCase()}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;
