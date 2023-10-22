import type {SelectWhereConditionStep} from './select-where-condition-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectConnectByStep} from './select-connect-by-step';

type SelectWhereStep<Record extends EntryType> = (SelectConnectByStep<Record> & {
  // TODO: where.
  where(): SelectWhereConditionStep<Record>
});

export type {
  SelectWhereStep
};
