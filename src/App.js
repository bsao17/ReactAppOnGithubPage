import React, {useState} from "react"
import Counter from "./components/counter/Counter";
import './App.scss';


function App(props) {
  return (
    <div className={"App"}>
      <h1 className={"border border-3 border-light bg-secondary p-3 rounded"} style={{textShadow: "white 0 0 3px"}} >Counter with Redux</h1>
      <Counter counter={0}/>
    </div>
  );
}

export default App;
