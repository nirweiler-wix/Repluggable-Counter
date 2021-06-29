import { EntryPoint, hot } from "repluggable";
import { CounterDataEntryPoint } from './entryPoints/counterDataEntryPoint';
import { CounterUIEntryPoint } from './entryPoints/counterUIEntryPoint';


export const CounterPackage: EntryPoint[] = hot(module, [
    CounterUIEntryPoint,
    CounterDataEntryPoint,
]);
