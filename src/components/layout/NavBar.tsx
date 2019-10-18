import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const Navbar = () => (
  <Nav>
    <Logo />
    <Menu />
  </Nav>
);

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  padding: 12px;
`;

export default Navbar;
