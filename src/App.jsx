import React from "react";
import "./App.css";
import Input from "./components/Input/Input.jsx";
import Heading from "./components/Heading/Heading.jsx";
import List from "./components/List/List.jsx";
import Container from "./components/Container/Container.jsx";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg.jsx";

const App = () => {
  const myTasks = ["12 pm start work", "5 min breaks", "aning 25 works"];
  // const myTasks = [];

  return (
    <Container>
      <Heading />
      <Input />
      <ErrorMsg listT={myTasks} />
      <List listT={myTasks} />
    </Container>
  );
};

export default App;
