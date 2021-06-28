import React, { FunctionComponent } from "react";
import { ExtensionSlot, SlotRenderer } from "repluggable";
import { ContributedComponent } from "./topBarAPI";

type TopBarComponent = FunctionComponent<{slot: ExtensionSlot<ContributedComponent>}>

const slotItemToComp = ({component}: ContributedComponent) => component

export const TopBarComponent: TopBarComponent = ({slot}) => (
    <div className="topBar">
        <SlotRenderer slot={slot} mapFunc={slotItemToComp}/>
    </div>
)