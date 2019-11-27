import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif
  }
  h1,h2,h3{
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>Hello, sliceline</div>
    </>
  );
}

export default App;
