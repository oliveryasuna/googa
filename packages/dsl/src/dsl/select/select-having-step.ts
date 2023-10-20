import type {SelectWindowStep} from './select-window-step';

type SelectHavingStep = (SelectWindowStep & {
  // TODO: having.
  having(): SelectHavingStep
});

export type {
  SelectHavingStep
};
