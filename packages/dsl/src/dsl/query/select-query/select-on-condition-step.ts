import type {Entry as EntryType} from '../../entry';
import type {SelectJoinStep} from './select-join-step';
import type {Condition} from '../../condition';
import type {Field} from '../../field';
import type {SelectQuery} from './select-query';

type SelectOnConditionStep<Entry extends EntryType> = (SelectJoinStep<Entry> & {
  and(condition: Condition): SelectOnConditionStep<Entry>,
  // TODO: Add null/undefined to boolean?
  and(condition: Field<boolean>): SelectOnConditionStep<Entry>,

  andNot(condition: Condition): SelectOnConditionStep<Entry>,
  // TODO: Add null/undefined to boolean?
  andNot(condition: Field<boolean>): SelectOnConditionStep<Entry>,

  andExists(condition: SelectQuery<any>): SelectOnConditionStep<Entry>,

  andNotExists(condition: SelectQuery<any>): SelectOnConditionStep<Entry>,

  or(condition: Condition): SelectOnConditionStep<Entry>,
  // TODO: Add null/undefined to boolean?
  or(condition: Field<boolean>): SelectOnConditionStep<Entry>,

  orNot(condition: Condition): SelectOnConditionStep<Entry>,
  // TODO: Add null/undefined to boolean?
  orNot(condition: Field<boolean>): SelectOnConditionStep<Entry>,

  orExists(condition: SelectQuery<any>): SelectOnConditionStep<Entry>,
  orNotExists(condition: SelectQuery<any>): SelectOnConditionStep<Entry>
});

export type {
  SelectOnConditionStep
};
