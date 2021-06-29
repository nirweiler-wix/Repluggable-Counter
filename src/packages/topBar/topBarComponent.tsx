import React, { FunctionComponent } from "react";
import { ExtensionSlot, SlotRenderer } from "repluggable";
import { TopBarContributedComponent } from "./topBarAPI";
import "./topBarComponent.css";

type TopBarComponent = FunctionComponent<{slot: ExtensionSlot<TopBarContributedComponent>}>

const slotItemToComp = ({component}: TopBarContributedComponent) => component

export const TopBarComponent: TopBarComponent = ({slot}) => (
    <div className="topBar">
        <SlotRenderer slot={slot} mapFunc={slotItemToComp}/>
    </div>
)

