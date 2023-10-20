import type {SelectFromStep} from './select-from-step';

type SelectIntoStep = (SelectFromStep & {
  // TODO: into.
  into(): SelectFromStep
});

export type {
  SelectIntoStep
};
