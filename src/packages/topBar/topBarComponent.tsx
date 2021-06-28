import React, { FunctionComponent } from "react";
import { ExtensionSlot, SlotRenderer } from "repluggable";
import { TopBarContributedComponent } from "./topBarAPI";
import "./topBarComponent.css";

export const TopBarComponent: FunctionComponent = () => {
  return (
    <div>
      <header className="topBar">Top bar</header>
    </div>
  );
};
