import type {SelectOrderByStep} from './select-order-by-step';

type SelectQualifyConditionStep = (SelectOrderByStep & {
  // TODO: and.
  and(): SelectQualifyConditionStep,

  // TODO: andNot.
  andNot(): SelectQualifyConditionStep,

  // TODO: andExists.
  andExists(): SelectQualifyConditionStep,

  // TODO: andNotExists.
  andNotExists(): SelectQualifyConditionStep,

  // TODO: or.
  or(): SelectQualifyConditionStep,

  // TODO: orNot.
  orNot(): SelectQualifyConditionStep,

  // TODO: orExists.
  orExists(): SelectQualifyConditionStep,

  // TODO: orNotExists.
  orNotExists(): SelectQualifyConditionStep
});

export type {
  SelectQualifyConditionStep
};
