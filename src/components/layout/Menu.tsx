import React from "react";
import ActiveLink from "./ActiveLink";
import styled from "styled-components";

const Menu = () => (
  <List>
    <ListItem>
      <ActiveLink href="/movies">movies</ActiveLink>
    </ListItem>
    <ListItem>
      <ActiveLink href="/series">series</ActiveLink>
    </ListItem>
    <ListItem>
      <ActiveLink href="/watchlist">watchlist</ActiveLink>
    </ListItem>
    <ListItem>
      <ActiveLink href="/likelist">likelist</ActiveLink>
    </ListItem>
  </List>
);

const List = styled.ul`
  display: flex;
  margin-left: 8rem;
`;

const ListItem = styled.li`
  font-weight: 100;
  font-size: 1.1rem;
  margin: 0 4rem;
`;

export { List, ListItem };
export default Menu;
