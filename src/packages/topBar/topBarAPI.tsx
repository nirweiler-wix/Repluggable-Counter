import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';

export interface TopBarAPI {
    contributeTopBarComponent(fromShell: Shell, contribution: TopBarContributedComponent): void
}

export const TopBarAPI: SlotKey<TopBarAPI> = {
    name: 'Top Bar API',
    public: true,
};

export interface TopBarContributedComponent {
  component: ReactComponentContributor;
}

export const componentsSlotKey: SlotKey<TopBarContributedComponent> = {
  name: 'topBarContributedComponent',
};

export const createTopBarAPI = (shell: Shell): TopBarAPI => {
    const componentsSlot = shell.declareSlot(componentsSlotKey)

    return {
        contributeTopBarComponent(fromShell, contribution) {
            componentsSlot.contribute(fromShell, contribution)
        }
    }
};