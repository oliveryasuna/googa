import type {SelectOrderByStep} from './select-order-by-step';
import type {SelectFinalStep} from './select-final-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectQuery} from './select-query';

// TODO: SelectCorrelatedSubqueryStep?
type SelectUnionStep<Entry extends EntryType> = (SelectFinalStep<Entry> & {
  // TODO: Does this work?
  union(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,
  // TODO: Does this work?
  unionAll(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,
  // TODO: Does this work?
  except(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,
  // TODO: Does this work?
  exceptAll(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,
  // TODO: Does this work?
  intersect(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>,
  // TODO: Does this work?
  intersectAll(selectQuery: SelectQuery<Entry>): SelectOrderByStep<Entry>
});

export type {
  SelectUnionStep
};
