import type {Entry as EntryType} from '../../entry';
import {SelectLimitStep} from './select-limit-step';

/**
 * `ORDER BY` expression [ASC | DESC | USING operator] [NULLS {FIRST | LAST}] [, ...]`
 * step of an `ORDER BY` clause.
 */
type SelectOrderByStep<Entry extends EntryType> = (SelectLimitStep<Entry> & {
  // TODO: Add `ORDER BY` functions.
});

export type {
  SelectOrderByStep
};
