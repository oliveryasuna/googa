import type {Entry as EntryType} from '../../entry';
import type {Condition} from '../../condition';
import type {SelectOnConditionStep} from './select-on-condition-step';
import type {Field} from '../../field';
import type {SelectJoinStep} from './select-join-step';

type SelectOnStep<Record extends EntryType> = {
  on(condition: Condition): SelectOnConditionStep<Record>,
  on(condition: Condition[]): SelectOnConditionStep<Record>,
  // TODO: Add null/undefined to boolean?
  on(condition: Field<boolean>): SelectOnConditionStep<Record>,

  using(...fields: Field<any>[]): SelectJoinStep<Record>
};

export type {
  SelectOnStep
};
