import React from "react";
import { EntryPoint } from "repluggable";
import { MainViewAPI } from "../mainView";
import { TopBarAPI, componentsSlotKey } from "./topBarAPI";
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
