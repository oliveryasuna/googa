import type {SelectWindowStep} from './select-window-step';

type SelectHavingConditionStep = (SelectWindowStep & {
  // TODO: and.
  and(): SelectHavingConditionStep,

  // TODO: andNot.
  andNot(): SelectHavingConditionStep,

  // TODO: andExists.
  andExists(): SelectHavingConditionStep,

  // TODO: andNotExists.
  andNotExists(): SelectHavingConditionStep,

  // TODO: or.
  or(): SelectHavingConditionStep,

  // TODO: orNot.
  orNot(): SelectHavingConditionStep,

  // TODO: orExists.
  orExists(): SelectHavingConditionStep,

  // TODO: orNotExists.
  orNotExists(): SelectHavingConditionStep
});

export type {
  SelectHavingConditionStep
};
