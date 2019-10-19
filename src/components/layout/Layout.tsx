import React, { ReactNode, FC } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout: FC = ({ children }: { children: ReactNode[] }) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);

export const Container = styled.div``;
export default Layout;
