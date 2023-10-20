import type {Query} from '../query';
import type {Record as RecordType} from '../../record';
import type {TableLike} from '../../table-like';

// @ts-expect-error: TS6133 because may use in the future.
type SelectQuery<Record extends RecordType> = (TableLike & Query & {});

export type {
  SelectQuery
};
