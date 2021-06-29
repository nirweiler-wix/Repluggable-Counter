import { CounterState } from './counterInitialState';

export interface CounterSelectors {
    getCounter: () => Number;
}

export function createCounterSelectors(
    getState: () => CounterState,
): CounterSelectors {
    const countState = (): CounterState => getState();
    return {
        getCounter() {
            return countState().counter;
        },
    };
}