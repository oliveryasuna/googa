import type {Entry as EntryType} from './entry';
import type {QueryPart} from './query';

// @ts-expect-error: TS6133 because may use in the future.
type TableLike<Entry extends EntryType> = (QueryPart & {});

export type {
  TableLike
};
