import type {SelectForStep} from './select-for-step';

type SelectForUpdateWaitStep = (SelectForStep & {
  // TODO: wait.
  wait(): SelectForStep,

  // TODO: noWait.
  noWait(): SelectForStep,

  // TODO: skipLocked.
  skipLocked(): SelectForStep
});

export type {
  SelectForUpdateWaitStep
};
