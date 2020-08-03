import React from "react";
// stylesheet
import "./App.css";
// components
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container />
    </div>
  );
}

export default App;
