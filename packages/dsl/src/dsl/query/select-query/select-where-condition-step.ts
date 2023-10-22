import type {SelectGroupByStep} from './select-group-by-step';
import type {Entry as EntryType} from '../../entry';

type SelectWhereConditionStep<Entry extends EntryType> = (SelectGroupByStep<Entry> & {
  // TODO: and.
  and(): SelectWhereConditionStep<Entry>,

  // TODO: andNot.
  andNot(): SelectWhereConditionStep<Entry>,

  // TODO: andExists.
  andExists(): SelectWhereConditionStep<Entry>,

  // TODO: andNotExists.
  andNotExists(): SelectWhereConditionStep<Entry>,

  // TODO: or.
  or(): SelectWhereConditionStep<Entry>,

  // TODO: orNot.
  orNot(): SelectWhereConditionStep<Entry>,

  // TODO: orExists.
  orExists(): SelectWhereConditionStep<Entry>,

  // TODO: orNotExists.
  orNotExists(): SelectWhereConditionStep<Entry>
});

export type {
  SelectWhereConditionStep
};
