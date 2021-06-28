import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';

export interface TopBarAPI {
    contributeComponent(fromShell: Shell, contribution: TopBarContributedComponent): void
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
        contributeComponent(fromShell, contribution) {
            componentsSlot.contribute(fromShell, contribution)
        }
    }
};