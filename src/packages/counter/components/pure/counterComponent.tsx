import { FunctionComponent } from "react";
import { CounterProps } from './types'
import "./counterComponent.css";

export const Counter: FunctionComponent<CounterProps> = (props) => {
  console.log("Counter Compenent");
  return (
    <div className="container">
      <p className="counter">{props.counter}</p>
    </div>
  );
};
