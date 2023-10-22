import type {Entry as EntryType} from '../../entry';
import type {SelectJoinStep} from './select-join-step';
import type {Condition} from '../../condition';
import type {Field} from '../../field';
import type {SelectQuery} from './select-query';

type SelectOnConditionStep<Record extends EntryType> = (SelectJoinStep<Record> & {
  and(condition: Condition): SelectOnConditionStep<Record>,
  // TODO: Add null/undefined to boolean?
  and(condition: Field<boolean>): SelectOnConditionStep<Record>,

  andNot(condition: Condition): SelectOnConditionStep<Record>,
  // TODO: Add null/undefined to boolean?
  andNot(condition: Field<boolean>): SelectOnConditionStep<Record>,

  andExists(condition: SelectQuery<any>): SelectOnConditionStep<Record>,

  andNotExists(condition: SelectQuery<any>): SelectOnConditionStep<Record>,

  or(condition: Condition): SelectOnConditionStep<Record>,
  // TODO: Add null/undefined to boolean?
  or(condition: Field<boolean>): SelectOnConditionStep<Record>,

  orNot(condition: Condition): SelectOnConditionStep<Record>,
  // TODO: Add null/undefined to boolean?
  orNot(condition: Field<boolean>): SelectOnConditionStep<Record>,

  orExists(condition: SelectQuery<any>): SelectOnConditionStep<Record>,
  orNotExists(condition: SelectQuery<any>): SelectOnConditionStep<Record>
});

export type {
  SelectOnConditionStep
};
