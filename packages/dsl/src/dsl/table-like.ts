import type {Entry as EntryType} from './entry';
import type {QueryPart} from './query';

// @ts-expect-error: TS6133 because may use in the future.
type TableLike<Record extends EntryType> = (QueryPart & {});

export type {
  TableLike
};
