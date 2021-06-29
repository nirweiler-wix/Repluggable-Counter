import { FunctionComponent } from "react";
import { CounterControlsProps } from './types'
import "./counterComponent.css";

export const CounterControls: FunctionComponent<CounterControlsProps> = (props) => {
    console.log("Counter Controls");
    return (
        <div className="container">
            <button className="controlButton" onClick={props.increase}>+</button>
            <button className="controlButton" onClick={props.decrease}>-</button>
        </div>
    );
};