import React, { useState } from "react";

import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../constants/styles";

const BaseLayout = () => {
  const [theme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Outlet />
    </ThemeProvider>
  );
};

export default BaseLayout;
