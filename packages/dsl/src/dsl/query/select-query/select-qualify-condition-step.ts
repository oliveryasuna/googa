import type {SelectOrderByStep} from './select-order-by-step';
import type {Entry as EntryType} from '../../entry';

type SelectQualifyConditionStep<Entry extends EntryType> = (SelectOrderByStep<Entry> & {
  // TODO: and.
  and(): SelectQualifyConditionStep<Entry>,

  // TODO: andNot.
  andNot(): SelectQualifyConditionStep<Entry>,

  // TODO: andExists.
  andExists(): SelectQualifyConditionStep<Entry>,

  // TODO: andNotExists.
  andNotExists(): SelectQualifyConditionStep<Entry>,

  // TODO: or.
  or(): SelectQualifyConditionStep<Entry>,

  // TODO: orNot.
  orNot(): SelectQualifyConditionStep<Entry>,

  // TODO: orExists.
  orExists(): SelectQualifyConditionStep<Entry>,

  // TODO: orNotExists.
  orNotExists(): SelectQualifyConditionStep<Entry>
});

export type {
  SelectQualifyConditionStep
};
