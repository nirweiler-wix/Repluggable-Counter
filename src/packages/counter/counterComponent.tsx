import { FunctionComponent } from "react";
import "./counterComponent.css";

export const Counter: FunctionComponent = () => {
  console.log("Counter Compenent");
  return (
    <div className="container">
      <p className="counter">Counter</p>
    </div>
  );
};
