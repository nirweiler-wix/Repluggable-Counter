import { FunctionComponent } from "react";
import { CounterAPI } from './counterAPI'
import "./counterComponent.css";

export const Counter: FunctionComponent = () => {
  console.log("Counter Compenent");
  return (
    <div className="container">
      <p className="counter">Counter</p>
    </div>
  );
};

type CounterControlsProps = {
    increase() : CounterAPI["increaseCounter"];
    decresde() : CounterAPI["decreaseCounter"];
}

export const CounterControls: FunctionComponent = () => {
    console.log("Counter Controls");
    return (
        <div className="container">
            <button className="controlButton">+</button>
            <button className="controlButton">-</button>
        </div>
    );
};
