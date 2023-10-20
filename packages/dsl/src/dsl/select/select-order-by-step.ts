import type {SelectLimitStep} from './select-limit-step';

type SelectOrderByStep = (SelectLimitStep & {
  // TODO: orderBy.
});

export type {
  SelectOrderByStep
};
