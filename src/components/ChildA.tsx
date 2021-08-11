import React from "react";
import { useExampleState } from "../store/exampleState";

const ChildA = () => {
  console.log("Child-A rendering");

  const exState = useExampleState();

  return <p>{exState.A.value}</p>;
};

export default ChildA;
