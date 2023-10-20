import type {SelectForUpdateWaitStep} from './select-for-update-wait-step';

type SelectForUpdateOfStep = (SelectForUpdateWaitStep & {
  // TODO: of.
  of(): SelectForUpdateWaitStep
});

export type {
  SelectForUpdateOfStep
};
