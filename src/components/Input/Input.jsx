import React, { useRef } from "react";
import styles from "./Input.module.css";
const Input = ({ handleKeyDown,setaddTasks }) => {
  const inputValue=useRef()
  const addItems=()=>{
    const value = inputValue.current.value.trim();
    if (value === '') {
      alert('Please enter a task')
      return
      
    }
    if (value) {
      setaddTasks((prevTasks) => [...prevTasks, value]);
      inputValue.current.value = '';

    // setaddTasks(inputValue.current.value)
  }}
  return (
    <div>
      <input
        className={styles.inputMain}
        onKeyDown={handleKeyDown}
        type="text"
        ref={inputValue}
      />
      <button onClick={addItems} className=' btn bg-success ms-2' >Add</button>
    </div>
  );
};

export default Input;
