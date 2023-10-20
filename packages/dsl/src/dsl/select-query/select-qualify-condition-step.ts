import type {SelectOrderByStep} from './select-order-by-step';
import type {Record as RecordType} from '../record';

type SelectQualifyConditionStep<Record extends RecordType> = (SelectOrderByStep<Record> & {
  // TODO: and.
  and(): SelectQualifyConditionStep<Record>,

  // TODO: andNot.
  andNot(): SelectQualifyConditionStep<Record>,

  // TODO: andExists.
  andExists(): SelectQualifyConditionStep<Record>,

  // TODO: andNotExists.
  andNotExists(): SelectQualifyConditionStep<Record>,

  // TODO: or.
  or(): SelectQualifyConditionStep<Record>,

  // TODO: orNot.
  orNot(): SelectQualifyConditionStep<Record>,

  // TODO: orExists.
  orExists(): SelectQualifyConditionStep<Record>,

  // TODO: orNotExists.
  orNotExists(): SelectQualifyConditionStep<Record>
});

export type {
  SelectQualifyConditionStep
};
