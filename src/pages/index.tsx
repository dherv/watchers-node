import React from "react";
import styled from "styled-components";
import MovieList from "../components/MovieList";
import Navbar from "../components/layout/Navbar";

const Index = () => (
  <Container>
    <Navbar></Navbar>
    <MovieList />
  </Container>
);

const Container = styled.div``;
export default Index;
