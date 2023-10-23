import type {Entry as EntryType} from '../../entry';
import type {SelectOrderByStep} from './select-order-by-step';

/**
 * `WINDOW window_name AS ( window_definition ) [, ...]` step of a `WINDOW`
 * clause.
 */
type SelectWindowStep<Entry extends EntryType> = (SelectOrderByStep<Entry> & {
  // TODO: Add `WINDOW` functions.
});

export type {
  SelectWindowStep
};
