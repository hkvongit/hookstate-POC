import React from "react";
import { useExampleState } from "../store/exampleState";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  console.log("Parent rendering");
  const exampleState = useExampleState();
  return (
    <div>
      <ChildA />
      <ChildB />

      <button
        onClick={() => {
          exampleState.merge((prevState) => ({ A: prevState.A + 1 }));
        }}
      >
        Increment Child-A number
      </button>

      <button
        onClick={() => {
          exampleState.set((prevState) => ({
            ...prevState,
            B: prevState.B + 1
          }));
        }}
      >
        Increment Child-B number
      </button>
    </div>
  );
};

export default Parent;
