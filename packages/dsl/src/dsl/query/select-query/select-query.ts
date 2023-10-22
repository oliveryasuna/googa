import type {Query} from '../query';
import type {Entry as EntryType} from '../../entry';
import type {TableLike} from '../../table-like';

// @ts-expect-error: TS6133 because may use in the future.
type SelectQuery<Record extends EntryType> = (TableLike & Query & {});

export type {
  SelectQuery
};
