import type {SelectIntoStep} from './select-into-step';

type SelectDistinctOnStep = (SelectIntoStep & {
  // TODO: on.
  on(): SelectIntoStep,

  // TODO: distinctOn.
  distinctOn(): SelectIntoStep
});

export type {
  SelectDistinctOnStep
};
