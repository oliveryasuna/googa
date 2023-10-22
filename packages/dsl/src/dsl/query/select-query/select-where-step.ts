import type {SelectWhereConditionStep} from './select-where-condition-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectConnectByStep} from './select-connect-by-step';

type SelectWhereStep<Entry extends EntryType> = (SelectConnectByStep<Entry> & {
  // TODO: where.
  where(): SelectWhereConditionStep<Entry>
});

export type {
  SelectWhereStep
};
