import type {SelectOffsetStep} from './select-offset-step';

type SelectWithTiesStep = (SelectOffsetStep & {
  // TODO: withTies.
  withTies(): SelectOffsetStep
});

export type {
  SelectWithTiesStep
};
