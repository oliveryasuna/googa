import type {Record as RecordType} from '../../record';
import type {SelectJoinStep} from './select-join-step';

type SelectOnConditionStep<Record extends RecordType> = (SelectJoinStep<Record> & {
  // TODO: and.
  and(): SelectOnConditionStep<Record>,

  // TODO: andNot.
  andNot(): SelectOnConditionStep<Record>,

  // TODO: andExists.
  andExists(): SelectOnConditionStep<Record>,

  // TODO: andNotExists.
  andNotExists(): SelectOnConditionStep<Record>,

  // TODO: or.
  or(): SelectOnConditionStep<Record>,

  // TODO: orNot.
  orNot(): SelectOnConditionStep<Record>,

  // TODO: orExists.
  orExists(): SelectOnConditionStep<Record>,

  // TODO: orNotExists.
  orNotExists(): SelectOnConditionStep<Record>
});

export type {
  SelectOnConditionStep
};
