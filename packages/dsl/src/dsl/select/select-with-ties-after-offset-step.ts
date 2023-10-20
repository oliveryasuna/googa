import type {SelectForUpdateStep} from './select-for-update-step';

type SelectWithTiesAfterOffsetStep = (SelectForUpdateStep & {
  // TODO: withTies.
  withTies(): SelectForUpdateStep
});

export type {
  SelectWithTiesAfterOffsetStep
};
