import type {Entry as EntryType} from '../../entry';
import type {SelectQuery} from './select-query';
import type {SelectOrderByStep} from './select-order-by-step';

/**
 * `{UNION | INTERSECT | EXCEPT} [ALL | DISTINCT] select` step of a `SELECT`
 * statement.
 */
type SelectConnectStep<Entry extends EntryType> = (SelectQuery<Entry> & {
  union(): SelectConnectAfterConnectTypeStep<Entry>,

  intersect(): SelectConnectAfterConnectTypeStep<Entry>,

  except(): SelectConnectAfterConnectTypeStep<Entry>
});

type SelectConnectAfterConnectTypeStep<Entry extends EntryType> = {
  all(): SelectUnionSelectStep<Entry>,

  distinct(): SelectUnionSelectStep<Entry>
};

type SelectUnionSelectStep<Entry extends EntryType> = {
  select<Entry2 extends Entry>(selectQuery: SelectQuery<Entry2>): SelectOrderByStep<Entry>
};

export type {
  SelectConnectStep
};
