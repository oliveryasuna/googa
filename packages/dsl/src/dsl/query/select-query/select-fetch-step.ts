import type {Entry as EntryType} from '../../entry';

/**
 * `FETCH {FIRST | NEXT} [count] {ROW | ROWS} {ONLY | WITH TIES}` step of a
 * `FETCH` clause.
 */
// TODO: Extended type.
// @ts-expect-error: TS6133 because will use later.
type SelectFetchStep<Entry extends EntryType> = {
  // TODO: Implement `FETCH` functions.
};

export type {
  SelectFetchStep
};
