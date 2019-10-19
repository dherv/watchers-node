import React from "react";
import Router from "next/router";

const Index = () => {
  return <div></div>;
};

Index.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: "/movies"
    });
    res.end();
  } else {
    Router.push("/movies");
  }
  return {};
};

export default Index;
