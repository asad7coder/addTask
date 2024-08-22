import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input.jsx";
import Heading from "./components/Heading/Heading.jsx";
import List from "./components/List/List.jsx";
import Container from "./components/Container/Container.jsx";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg.jsx";

const App = () => {
  // const myTasks = ["12 pm start work", "5 min breaks", "aning 25 works"];
  // const myTasks = [];
  let [myTasks, setaddTasks] = useState([
    "12 pm start work",
    "5 min breaks",
    "aning 25 works",
  ]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newTaks = event.target.value.trim();
      if (event.target.value==='') {
        alert('Please enter a task');
        return;
        
      }
      event.target.value = "";
      let newTaksR = [...myTasks, newTaks];
      setaddTasks(newTaksR);
    }

  };
  const onDeleteBtn=(itemToDelete)=>{
    setaddTasks(myTasks.filter(task=>task !==itemToDelete))
    console.log(`Delete Items::> ${itemToDelete}`)
    

  }
  return (
    <Container>
      <Heading />
      <Input handleKeyDown={onKeyDown} setaddTasks={setaddTasks} />
      <ErrorMsg listT={myTasks} />
      <List listT={myTasks} onDeleteBtn={onDeleteBtn} />
    </Container>
  );
};

export default App;
