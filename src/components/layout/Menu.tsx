import React from "react";
import ActiveLink from "./ActiveLink";
import styled from "styled-components";

const Menu = () => (
  <List>
    <ActiveLink href="/movies">movies</ActiveLink>
    {/* <ActiveLink href="/series">series</ActiveLink> */}
    <ActiveLink href="/watchlist">watchlist</ActiveLink>
    {/* <ActiveLink href="/likelist">likelist</ActiveLink> */}
  </List>
);

const List = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 7rem;
`;

export { List };
export default Menu;
