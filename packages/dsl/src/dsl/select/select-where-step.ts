import type {SelectGroupByStep} from './select-group-by-step';
import type {SelectWhereConditionStep} from './select-where-condition-step';

type SelectWhereStep = (SelectGroupByStep & {
  // TODO: where.
  where(): SelectWhereConditionStep
});

export type {
  SelectWhereStep
};
