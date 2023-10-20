import type {SelectWithTiesStep} from './select-with-ties-step';

type SelectLimitPercentStep = (SelectWithTiesStep & {
  // TODO: percent.
  percent(): SelectWithTiesStep
});

export type {
  SelectLimitPercentStep
};
