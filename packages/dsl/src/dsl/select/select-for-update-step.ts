import type {SelectForStep} from './select-for-step';
import type {SelectForUpdateOfStep} from './select-for-update-of-step';
import type {SelectFinalStep} from './select-final-step';

type SelectForUpdateStep = (SelectForStep & {
  // TODO: forUpdate.
  forUpdate(): SelectForUpdateOfStep,

  // TODO: forNoKeyUpdate.
  forNoKeyUpdate(): SelectForUpdateOfStep,

  // TODO: forShare.
  forShare(): SelectForUpdateOfStep,

  // TODO: forKeyShare.
  forKeyShare(): SelectForUpdateOfStep,

  // TODO: withCheckOption.
  withCheckOption(): SelectFinalStep,

  // TODO: withReadOnly.
  withReadOnly(): SelectFinalStep
});

export type {
  SelectForUpdateStep
};
