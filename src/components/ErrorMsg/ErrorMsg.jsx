import React from "react";

const ErrorMsg = ({ listT }) => {
  return <div>{listT.length === 0 && <h3>Enter your tasks </h3>}</div>;
};

export default ErrorMsg;
