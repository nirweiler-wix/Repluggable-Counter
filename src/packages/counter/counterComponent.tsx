import { FunctionComponent } from "react";
import "./counterComponent.css";

export const Counter: FunctionComponent = () => {
  console.log("Counter Compenent");
  return (
    <div className="counter">
      <p>Counter</p>
    </div>
  );
};
