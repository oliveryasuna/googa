import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentAfterOffsetStep} from './select-limit-percent-after-offset-step';

type SelectLimitAfterOffsetStep = (SelectForUpdateStep & {
  // TODO: limit.
  limit(): SelectLimitPercentAfterOffsetStep
});

export type {
  SelectLimitAfterOffsetStep
};
