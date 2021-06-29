import {Shell, SlotKey} from 'repluggable';
import { CounterState } from './state/counterInitialState';
import { createCounterSelectors } from './state/counterSelectors';
import { CounterActions } from './state/counterActions';

export interface CounterAPI {
    getCounter : () => Number;
    increaseCounter : () => void;
    decreaseCounter : () => void;
}

export const CounterAPI: SlotKey<CounterAPI> = {
    name: 'Counter API',
    //layer: 'DATA_SERVICE',
    public: true
}

export function createCounterAPI(shell: Shell) : CounterAPI {
    const store = shell.getStore<CounterState>();
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