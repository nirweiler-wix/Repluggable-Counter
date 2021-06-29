import { AnyAction } from 'redux';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export interface counterActions {
    increaseCounter: () => AnyAction;
    decreaseCounter: () => AnyAction;
}

export const CounterActions : counterActions = {
    increaseCounter : (): AnyAction => ({
        type: INCREASE,
    }),
    decreaseCounter : (): AnyAction => ({
        type: DECREASE
    })
};