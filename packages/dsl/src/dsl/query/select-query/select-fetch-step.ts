import type {Entry as EntryType} from '../../entry';
import type {SelectConnectStep} from './select-connect-step';

/**
 * `FETCH {FIRST | NEXT} [count] {ROW | ROWS} {ONLY | WITH TIES}` step of a
 * `FETCH` clause.
 */
type SelectFetchStep<Entry extends EntryType> = (SelectConnectStep<Entry> & {
  // TODO: Implement `FETCH` functions.
});

export type {
  SelectFetchStep
};
