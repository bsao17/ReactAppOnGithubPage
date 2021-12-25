import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementCounter, incrementCounter, resetCounter} from "../../store/actions";
import styleCounter from "./counter.module.scss"

function Counter({ counter }) {
    const dispatch =  useDispatch()
    const selector = useSelector((state)=>state.value)
  return (
    <div className={"container card card-body bg-secondary border border-3 border-light"}>
      <h2 className={"text-center fw-bold m-5"} id={styleCounter.title} >Counter</h2>
      <div className={"card bg-dark border border-3 border-light w-50 m-auto p-5 d-flex flex-column justify-content-center align-items-center"}>
          <div className={"d-flex mb-3"}>
            <button className={styleCounter.buttonMore} onClick={()=>{dispatch(incrementCounter())}} >+</button>
            <button className={styleCounter.buttonLess} onClick={()=>{dispatch(decrementCounter())}} >-</button>
          </div>
        <div className={"border border-light bg-light w-100 text-center h1"} id={styleCounter.screen}>{selector}</div>
          <button className={"btn btn-lg btn-secondary text-light border border-2 border-light"} onClick={()=>{dispatch(resetCounter())}} >Reset</button>
      </div>
    </div>
  );
}

export default Counter