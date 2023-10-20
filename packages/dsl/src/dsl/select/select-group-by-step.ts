import type {SelectHavingStep} from './select-having-step';

type SelectGroupByStep = (SelectHavingStep & {
  // TODO: groupBy.
  groupBy(): SelectHavingStep,

  // TODO: groupByDistinct.
  groupByDistinct(): SelectHavingStep
});

export type {
  SelectGroupByStep
};
