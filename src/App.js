import { useState } from "react";
import Parent from "./components/Parent";
import "./styles.css";

export default function App() {
  const [ParentHanz, ParentZimmer] = ["ParentHanz", "ParentZimmer"];
  const activeParent = useState(ParentHanz);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>Start editing to see some magic happen!</h2>
      {activeParent === ParentHanz && <Parent />}
      {activeParent === ParentZimmer && <Parent />}
    </div>
  );
}
