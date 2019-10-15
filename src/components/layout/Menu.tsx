import React from "react";
import styled from "styled-components";

const Menu = () => (
  <List>
    <li>blog</li>
    <li>projects</li>
    <li>skills</li>
    <li>playground</li>
  </List>
);

const List = styled.ul`
  display: flex;
`;
export default Menu;
