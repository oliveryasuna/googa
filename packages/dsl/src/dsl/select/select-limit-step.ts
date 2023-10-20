import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentStep} from './select-limit-percent-step';
import type {SelectLimitAfterOffsetStep} from './select-limit-after-offset-step';

type SelectLimitStep = (SelectForUpdateStep & {
  // TODO: limit.
  limit(): SelectLimitPercentStep,

  // TODO: offset.
  offset(): SelectLimitAfterOffsetStep
});

export type {
  SelectLimitStep
};
