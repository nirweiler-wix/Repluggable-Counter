import { CounterState } from './counterInitialState';
import { CounterScopedState } from './types'

export interface CounterSelectors {
    getCounter: () => Number;
}

export function createCounterSelectors(
    getState: () => CounterScopedState,
): CounterSelectors {
    const countState = (): CounterState => getState().counter;
    return {
        getCounter() {
            return countState().counter;
        },
    };
}