export interface CounterStateProps {
    counter : Number
}

export interface CounterDispatchProps {
    increase : () => void;
    decrease : () => void;
}