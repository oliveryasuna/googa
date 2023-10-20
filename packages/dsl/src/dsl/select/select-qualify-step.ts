import type {SelectQualifyConditionStep} from './select-qualify-condition-step';
import type {SelectOrderByStep} from './select-order-by-step';

type SelectQualifyStep = (SelectOrderByStep & {
  // TODO: qualify.
  qualify(): SelectQualifyConditionStep
});

export type {
  SelectQualifyStep
};
