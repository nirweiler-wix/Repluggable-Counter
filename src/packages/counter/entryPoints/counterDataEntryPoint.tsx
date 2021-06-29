import { EntryPoint, Shell } from 'repluggable';
import { MainViewAPI } from '../../mainView/mainViewAPI'
import { CounterAPI } from '../counterAPI';
import { CounterScopedState } from '../state/types';
import { CounterReducer } from '../state/counterReducer';
import { createCounterAPI } from '../counterAPI'

export const CounterDataEntryPoint: EntryPoint = {
    name: 'Counter Data Entry Point',

    getDependencyAPIs() {
        return [MainViewAPI]
    },

    declareAPIs() {
        return [CounterAPI]
    },
    attach(shell:Shell) {
        shell.contributeState<CounterScopedState>(() => ({
            counter: CounterReducer,
        }));
        shell.contributeAPI(CounterAPI, () => createCounterAPI(shell));
      },
};