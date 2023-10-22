import type {Entry as EntryType} from '../../entry';
import type {SelectWhereStep} from './select-where-step';
import type {SelectJoinStep} from './select-join-step';
import type {TableLike} from '../../table-like';

type SelectFromStep<Record extends EntryType> = (SelectWhereStep<Record> & {
  from(...tables: TableLike<any>[]): SelectJoinStep<Record>
});

export type {
  SelectFromStep
};
