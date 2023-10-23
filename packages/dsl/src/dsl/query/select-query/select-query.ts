import type {Entry as EntryType} from '../../entry';
import type {Query} from '../query';
import type {TableLike} from '../../table-like';

type SelectQuery<Entry extends EntryType> = (Query & TableLike<Entry>);

export type {
  SelectQuery
};
