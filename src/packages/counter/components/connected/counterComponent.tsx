import { connectWithShell, Shell } from 'repluggable';
import { CounterAPI } from '../../counterAPI';
import { Counter} from '../pure/counterComponent';
import { CounterStateProps } from './types'

const mapStateToProps = (shell:Shell): CounterStateProps => {
    const counterAPI = shell.getAPI(CounterAPI);
    return {
        counter: counterAPI.getCounter()
    };
};

export const createConnectedCounter = (boundShell: Shell) => connectWithShell<{}, {}, CounterStateProps, {}>(
    mapStateToProps,
    undefined,
    boundShell,
)(Counter);