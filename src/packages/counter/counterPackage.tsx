import React from "react";
import { EntryPoint, Shell } from "repluggable";
import { MainViewAPI } from "../mainView";
import { CounterAPI, createCounterAPI } from './counterAPI';
import { Counter, CounterControls } from './counterComponent';
import { TopBarAPI } from '../topBar/topBarAPI'


export const CounterPackage: EntryPoint[] = [{
  name: "COUNTER",
  declareAPIs() {
    return [CounterAPI];
  },
  getDependencyAPIs() {
    return [MainViewAPI, TopBarAPI];
  },
  extend(shell) {
    shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Counter/>});
    shell.getAPI(TopBarAPI).contributeTopBarComponent(shell, {component: () => <CounterControls/>});
  },
}];
