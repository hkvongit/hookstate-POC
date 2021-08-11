import React from "react";
import { useExampleState } from "../store/exampleState";

const ChildB = () => {
  console.log("Child-B rendering");
  const exState = useExampleState();
  return <p>{exState.B.value}</p>;
};

export default ChildB;
