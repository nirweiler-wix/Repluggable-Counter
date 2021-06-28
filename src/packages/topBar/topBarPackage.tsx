import React from "react";
import { EntryPoint } from "repluggable";
import { MainViewAPI } from "../mainView";
import { TopBarAPI, componentsSlotKey, createTopBarAPI } from "./topBarAPI";
import { TopBarComponent } from "./topBarComponent";

export const TopBarPackage: EntryPoint[] = [
  {
    name: "TOP_BAR",
    declareAPIs() {
      return [TopBarAPI];
    },
    getDependencyAPIs() {
      return [MainViewAPI];
    },
    attach(shell) {
      shell.contributeAPI(TopBarAPI, () => createTopBarAPI(shell));
    },
    extend(shell) {
      shell
        .getAPI(MainViewAPI)
        .contributeComponent(shell, {
          component: () => (
            <TopBarComponent slot={shell.getSlot(componentsSlotKey)} />
          ),
        });
    },
  },
];
