import type {SelectOrderByStep} from './select-order-by-step';
import type {SelectFinalStep} from './select-final-step';

type SelectUnionStep = (SelectFinalStep & {
  // TODO: union.
  union(): SelectOrderByStep,

  // TODO: unionAll.
  unionAll(): SelectOrderByStep,

  // TODO: except.
  except(): SelectOrderByStep,

  // TODO: exceptAll.
  exceptAll(): SelectOrderByStep,

  // TODO: intersect.
  intersect(): SelectOrderByStep,

  // TODO: intersectAll.
  intersectAll(): SelectOrderByStep
});

export type {
  SelectUnionStep
};
