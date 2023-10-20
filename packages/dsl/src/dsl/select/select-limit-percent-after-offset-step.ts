import type {SelectWithTiesAfterOffsetStep} from './select-with-ties-after-offset-step';

type SelectLimitPercentAfterOffsetStep = (SelectWithTiesAfterOffsetStep & {
  // TODO: percent.
  percent(): SelectWithTiesAfterOffsetStep
});

export type {
  SelectLimitPercentAfterOffsetStep
};
