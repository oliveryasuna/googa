import type {Entry as EntryType} from '../../entry';
import type {SelectQuery} from './select-query';
import type {SelectOrderByStep} from './select-order-by-step';

/**
 * `{UNION | INTERSECT | EXCEPT} [ALL | DISTINCT] select` step of a `SELECT`
 * statement.
 */
type SelectConnectStep<Entry extends EntryType> = (SelectQuery<Entry> & {
  union(): SelectConnectAfterConnectTypeStep<Entry>,

  // TODO: `this.union().select(selectQuery)`.
  union(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,

  intersect(): SelectConnectAfterConnectTypeStep<Entry>,

  except(): SelectConnectAfterConnectTypeStep<Entry>
});

type SelectConnectAfterConnectTypeStep<Entry extends EntryType> = {
  all(): SelectUnionSelectStep<Entry>,
  // TODO: `this.all().select(selectQuery)`.
  all(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,

  distinct(): SelectUnionSelectStep<Entry>,
  // TODO: `this.distinct().select(selectQuery)`.
  distinct(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>
};

type SelectUnionSelectStep<Entry extends EntryType> = {
  select<Entry2 extends Entry>(selectQuery: SelectQuery<Entry2>): SelectOrderByStep<Entry>
};

export type {
  SelectConnectStep
};
