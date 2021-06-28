import React from "react";
import { EntryPoint, Shell } from "repluggable";
import { MainViewAPI } from "../mainView";
import { CounterAPI, createCounterAPI } from './counterAPI';
import { Counter, CounterControls } from './counterComponent';


export const CounterPackage: EntryPoint[] = [{
  name: "COUNTER",
  declareAPIs() {
    return [CounterAPI];
  },
  getDependencyAPIs() {
    return [MainViewAPI];
  },
  extend(shell) {
    shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Counter/>});
  },
}];
