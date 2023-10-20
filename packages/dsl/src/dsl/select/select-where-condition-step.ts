import type {SelectGroupByStep} from './select-group-by-step';

type SelectWhereConditionStep = (SelectGroupByStep & {
  // TODO: and.
  and(): SelectWhereConditionStep,

  // TODO: andNot.
  andNot(): SelectWhereConditionStep,

  // TODO: andExists.
  andExists(): SelectWhereConditionStep,

  // TODO: andNotExists.
  andNotExists(): SelectWhereConditionStep,

  // TODO: or.
  or(): SelectWhereConditionStep,

  // TODO: orNot.
  orNot(): SelectWhereConditionStep,

  // TODO: orExists.
  orExists(): SelectWhereConditionStep,

  // TODO: orNotExists.
  orNotExists(): SelectWhereConditionStep
});

export type {
  SelectWhereConditionStep
};
