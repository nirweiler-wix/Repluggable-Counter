import {Shell, SlotKey} from 'repluggable';
import { createCounterSelectors } from './state/counterSelectors';
import { CounterActions } from './state/counterActions';
import { CounterScopedState } from './state/types';

export interface CounterAPI {
    getCounter : () => Number;
    increaseCounter : () => void;
    decreaseCounter : () => void;
}

export const CounterAPI: SlotKey<CounterAPI> = {
    name: 'Counter API',
    public: true
}

export function createCounterAPI(shell: Shell) : CounterAPI {
    const store = shell.getStore<CounterScopedState>();
    const selectors = createCounterSelectors(() => store.getState());

    const getCounter: CounterAPI["getCounter"] = () => selectors.getCounter();

    const increaseCounter: CounterAPI["increaseCounter"] = () => {
        shell.getStore().dispatch(CounterActions.increaseCounter());
    };

    const decreaseCounter: CounterAPI["decreaseCounter"] = () => {
        shell.getStore().dispatch(CounterActions.decreaseCounter());
    }
    return {
        getCounter,
        increaseCounter,
        decreaseCounter,
    };
};