import type {SelectGroupByStep} from './select-group-by-step';
import type {Entry as EntryType} from '../../entry';

type SelectWhereConditionStep<Record extends EntryType> = (SelectGroupByStep<Record> & {
  // TODO: and.
  and(): SelectWhereConditionStep<Record>,

  // TODO: andNot.
  andNot(): SelectWhereConditionStep<Record>,

  // TODO: andExists.
  andExists(): SelectWhereConditionStep<Record>,

  // TODO: andNotExists.
  andNotExists(): SelectWhereConditionStep<Record>,

  // TODO: or.
  or(): SelectWhereConditionStep<Record>,

  // TODO: orNot.
  orNot(): SelectWhereConditionStep<Record>,

  // TODO: orExists.
  orExists(): SelectWhereConditionStep<Record>,

  // TODO: orNotExists.
  orNotExists(): SelectWhereConditionStep<Record>
});

export type {
  SelectWhereConditionStep
};
