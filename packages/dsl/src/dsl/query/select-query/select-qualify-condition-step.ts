import type {SelectOrderByStep} from './select-order-by-step';
import type {Entry as EntryType} from '../../entry';

type SelectQualifyConditionStep<Record extends EntryType> = (SelectOrderByStep<Record> & {
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
