import type {SelectOrderByStep} from './select-order-by-step';
import type {SelectFinalStep} from './select-final-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectQuery} from './select-query';

// TODO: SelectCorrelatedSubqueryStep?
type SelectUnionStep<Record extends EntryType> = (SelectFinalStep<Record> & {
  // TODO: Does this work?
  union(selectQuery: SelectQuery<Record>): SelectOrderByStep<Record>,
  // TODO: Does this work?
  unionAll(selectQuery: SelectQuery<Record>): SelectOrderByStep<Record>,
  // TODO: Does this work?
  except(selectQuery: SelectQuery<Record>): SelectOrderByStep<Record>,
  // TODO: Does this work?
  exceptAll(selectQuery: SelectQuery<Record>): SelectOrderByStep<Record>,
  // TODO: Does this work?
  intersect(selectQuery: SelectQuery<Record>): SelectOrderByStep<Record>,
  // TODO: Does this work?
  intersectAll(selectQuery: SelectQuery<Record>): SelectOrderByStep<Record>
});

export type {
  SelectUnionStep
};
