import {Shell, SlotKey} from 'repluggable';

export interface CounterAPI {
    increase() : void;
    decrease() : void;
}

export const CounterAPI: SlotKey<CounterAPI> = {
    name: 'Counter API',
    public: true
}

export function createCounterAPI(shell: Shell) : CounterAPI {
    return {
        increase() {
            console.log("increase");
        },
        decrease() {
            console.log("decrease");
        }
    }
}