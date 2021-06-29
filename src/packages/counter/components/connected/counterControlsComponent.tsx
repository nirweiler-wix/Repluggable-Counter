import { connectWithShell, Shell } from 'repluggable';
import { CounterAPI } from '../../counterAPI';
import { CounterControls } from '../pure/counterControlsComponent';
import { CounterControlsProps } from '../pure/types';
import { CounterDispatchProps } from './types'

const mapDispatchToProps = (shell:Shell): CounterDispatchProps => {
    const counterAPI = shell.getAPI(CounterAPI);

    return{
        increase: () => counterAPI.increaseCounter(),
        decrease: () => counterAPI.decreaseCounter(),
    };
};

export const createConnectedCounterControls = (boundShell:Shell) => connectWithShell<{},{},{},CounterControlsProps>(
    undefined,
    mapDispatchToProps,
    boundShell,
)(CounterControls);
