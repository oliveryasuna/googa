import type {SelectQualifyStep} from './select-qualify-step';

type SelectWindowStep = (SelectQualifyStep & {
  // TODO: window.
  window(): SelectQualifyStep
});

export type {
  SelectWindowStep
};
