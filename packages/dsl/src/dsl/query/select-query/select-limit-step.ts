import type {Entry as EntryType} from '../../entry';
import type {Field} from '../../field';
import type {SelectOffsetStep} from './select-offset-step';

/**
 * `LIMIT {count | ALL}` step of a `LIMIT` clause.
 */
type SelectLimitStep<Entry extends EntryType> = (SelectOffsetStep<Entry> & {
  limit(): SelectLimitAfterLimitStep<Entry>,
  // TODO: `this.limit().limit(count)`.
  limit(count: Field<number | null>): SelectOffsetStep<Entry>,
  // TODO: `this.limit().limit(count)`.
  limit(count: (number | null)): SelectOffsetStep<Entry>,

  // TODO: `this.limit().all()`.
  limitAll(): SelectOffsetStep<Entry>
});

/**
 * `{count | ALL}` step of a `LIMIT` clause.
 */
type SelectLimitAfterLimitStep<Entry extends EntryType> = {
  limit(count: Field<number | null>): SelectOffsetStep<Entry>,
  limit(count: (number | null)): SelectOffsetStep<Entry>,

  all(): SelectOffsetStep<Entry>
}

export type {
  SelectLimitStep,
  SelectLimitAfterLimitStep
};
