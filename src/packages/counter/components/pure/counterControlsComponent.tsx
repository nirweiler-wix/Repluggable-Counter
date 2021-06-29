import { FunctionComponent } from "react";
import "./counterComponent.css";

export const CounterControls: FunctionComponent = () => {
    console.log("Counter Controls");
    return (
        <div className="container">
            <button className="controlButton">+</button>
            <button className="controlButton">-</button>
        </div>
    );
};