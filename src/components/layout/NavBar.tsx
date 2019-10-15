import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const Navbar = () => (
  <Nav>
    <Logo></Logo>
    <Menu></Menu>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default Navbar;
