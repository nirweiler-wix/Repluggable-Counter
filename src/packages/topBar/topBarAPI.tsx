import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';

export interface TopBarAPI {
    contributeComponent(fromShell: Shell, contribution: ContributedComponent): void
}

export const TopBarAPI: SlotKey<TopBarAPI> = {
    name: 'Top Bar API',
    public: true,
};

export interface ContributedComponent {
  component: ReactComponentContributor;
}

export const componentsSlotKey: SlotKey<ContributedComponent> = {
  name: 'contributedComponent',
};

export const createMainViewAPI = (shell: Shell): TopBarAPI => {
    const componentsSlot = shell.declareSlot(componentsSlotKey)

    return {
        contributeComponent(fromShell, contribution) {
            componentsSlot.contribute(fromShell, contribution)
        }
    }
};