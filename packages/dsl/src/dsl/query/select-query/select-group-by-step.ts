import type {Entry as EntryType} from '../../entry';
import type {GroupField} from '../../field';
import type {SelectHavingStep} from './select-having-step';

/**
 * `GROUP BY [ALL | DISTINCT] grouping_element [, ...]` step of a `GROUP BY`
 * clause.
 */
type SelectGroupByStep<Entry extends EntryType> = (SelectHavingStep<Entry> & {
  groupBy(): SelectGroupByAfterGroupByStep<Entry>,
  // TODO: `this.groupBy().groupBy(fields)`.
  groupBy(...fields: GroupField[]): SelectGroupByGroupingElementsStep<Entry>,

  // TODO: `this.groupBy().all()`.
  groupByAll(): SelectGroupByGroupingElementsStep<Entry>,
  // TODO: `this.groupByAll().groupBy(fields)`.
  groupByAll(...fields: GroupField[]): SelectGroupByGroupingElementsStep<Entry>,

  // TODO: `this.groupBy().distinct()`.
  groupByDistinct(): SelectGroupByGroupingElementsStep<Entry>,
  // TODO: `this.groupByDistinct().groupBy(fields)`.
  groupByDistinct(...fields: GroupField[]): SelectGroupByGroupingElementsStep<Entry>
});

/**
 * `[ALL | DISTINCT] grouping_element [, ...]` step of a `GROUP BY` clause.
 */
type SelectGroupByAfterGroupByStep<Entry extends EntryType> = {
  groupBy(...fields: GroupField[]): SelectGroupByGroupingElementsStep<Entry>,

  all(): SelectGroupByGroupingElementsStep<Entry>,

  distinct(): SelectGroupByGroupingElementsStep<Entry>
};

/**
 * `grouping_element [, ...]` step of a `GROUP BY` clause.
 *
 * This type allows chaining {@link SelectGroupByStep#groupBy} calls.
 */
type SelectGroupByGroupingElementsStep<Entry extends EntryType> = (SelectHavingStep<Entry> & {
  groupBy(...fields: GroupField[]): SelectGroupByGroupingElementsStep<Entry>
});

export type {
  SelectGroupByStep,
  SelectGroupByAfterGroupByStep,
  SelectGroupByGroupingElementsStep
};
