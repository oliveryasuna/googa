import type {SelectUnionStep} from './select-union-step';

type SelectOptionStep = (SelectUnionStep & {
  // TODO: option.
  option(): SelectUnionStep
});

export type {
  SelectOptionStep
};
