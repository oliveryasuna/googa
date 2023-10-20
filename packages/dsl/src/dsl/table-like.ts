import type {Record as RecordType} from './record';
import type {QueryPart} from './query/query-part';

// @ts-expect-error: TS6133 because may use in the future.
type TableLike<Record extends RecordType> = (QueryPart & {});

export type {
  TableLike
};
