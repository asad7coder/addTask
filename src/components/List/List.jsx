import React from "react";
import styles from "./List.module.css";
import ListData from "../ListData/ListData.jsx";
const List = ({ listT,onDeleteBtn }) => {
  return (
    <>
      <ul className={`list-group ul-list ${styles.ulItem}`}>
        <ListData listt={listT} onDeleteBtn={onDeleteBtn}></ListData>
      </ul>
    </>
  );
};

export default List;
