import React from "react";
import { EntryPoint, Shell } from "repluggable";
import { MainViewAPI } from '../../mainView/mainViewAPI';
import { TopBarAPI } from '../../topBar/topBarAPI'
import { CounterAPI, createCounterAPI } from '../counterAPI';
import { createConnectedCounter } from '../components/connected/counterComponent';
import { createConnectedCounterControls } from '../components/connected/counterControlsComponent';

export const CounterUIEntryPoint: EntryPoint = {
    name: 'Counter UI Entry Point',
    getDependencyAPIs() {
        return [MainViewAPI, TopBarAPI, CounterAPI];
    },
    extend(shell:Shell) {
        const mainViewAPI = shell.getAPI(MainViewAPI);
        const topBarAPI = shell.getAPI(TopBarAPI);
        const Counter = createConnectedCounter(shell);
        const CounterControls = createConnectedCounterControls(shell);

        mainViewAPI.contributeComponent(shell, {component: () => <Counter/>});
        topBarAPI.contributeTopBarComponent(shell, {component: () => <CounterControls/>});
    }
}