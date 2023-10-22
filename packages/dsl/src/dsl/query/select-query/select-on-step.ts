import type {Entry as EntryType} from '../../entry';
import type {Condition} from '../../condition';
import type {SelectOnConditionStep} from './select-on-condition-step';
import type {Field} from '../../field';
import type {SelectJoinStep} from './select-join-step';

type SelectOnStep<Entry extends EntryType> = {
  on(condition: Condition): SelectOnConditionStep<Entry>,
  on(condition: Condition[]): SelectOnConditionStep<Entry>,
  // TODO: Add null/undefined to boolean?
  on(condition: Field<boolean>): SelectOnConditionStep<Entry>,

  using(...fields: Field<any>[]): SelectJoinStep<Entry>
};

export type {
  SelectOnStep
};
