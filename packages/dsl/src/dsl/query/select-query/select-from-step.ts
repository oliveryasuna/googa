import type {Entry as EntryType} from '../../entry';
import type {SelectWhereStep} from './select-where-step';
import type {SelectJoinStep} from './select-join-step';
import type {TableLike} from '../../table-like';

type SelectFromStep<Entry extends EntryType> = (SelectWhereStep<Entry> & {
  from(...tables: TableLike<any>[]): SelectJoinStep<Entry>
});

export type {
  SelectFromStep
};
