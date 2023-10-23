import type {Entry as EntryType} from '../../entry';
import type {SelectFieldOrAsterisk} from '../../field';
import type {SelectFromStep} from './select-from-step';

/**
 * `SELECT [ALL | DISTINCT [ON (expression [, ...])]]` or
 * `* | expression [[AS] output_name] [, ...]` step of a `SELECT` statement.
 */
type SelectSelectStep<Entry extends EntryType> = {
  select(): SelectSelectAfterSelectStep<Entry>,
  // TODO: `this.select().select(fields)`.
  select(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  // TODO: `this.select().all()`.
  selectAll(): SelectSelectAsteriskOrExpressionsStep<Entry>,
  // TODO: `this.selectAll().select(fields)`.
  selectAll(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  // TODO: `this.select().distinct()`.
  selectDistinct(): SelectSelectAfterDistinctStep<Entry>,
  // TODO: `this.selectDistinct().select(fields)`.
  selectDistinct(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  // TODO: `this.select().distinctOn()`.
  selectDistinctOn(): SelectSelectAsteriskOrExpressionsStep<Entry>,
  // TODO: `this.select().distinctOn(fields)`.
  selectDistinctOn(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>
};

/**
 * `[ALL | DISTINCT [ON (expression [, ...])]]` or
 * `* | expression [[AS] output_name] [, ...]` step of a `SELECT` statement.
 */
type SelectSelectAfterSelectStep<Entry extends EntryType> = {
  select(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  all(): SelectSelectAsteriskOrExpressionsStep<Entry>,
  // TODO: `this.all().select(fields)`.
  all(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  distinct(): SelectSelectAfterDistinctStep<Entry>,
  // TODO: `this.distinct().select(fields)`.
  distinct(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  // TODO: `this.distinct().on()`.
  distinctOn(): SelectSelectAsteriskOrExpressionsStep<Entry>,
  // TODO: `this.distinctOn().select(fields)`.
  distinctOn(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>
};

/**
 * `[ON (expression [, ...])]` or `* | expression [[AS] output_name] [, ...]`
 * step of a `SELECT` statement.
 */
type SelectSelectAfterDistinctStep<Entry extends EntryType> = {
  select(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>,

  on(): SelectSelectAfterDistinctStep<Entry>,
  // TODO: `this.on().select(fields)`.
  on(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>
};

/**
 * `* | expression [[AS] output_name] [, ...]` step of a `SELECT` statement.
 *
 * This type allows chaining {@link SelectSelectAsteriskOrExpressionsStep#select}
 * calls.
 */
type SelectSelectAsteriskOrExpressionsStep<Entry extends EntryType> = (SelectFromStep<Entry> & {
  select(...fields: [SelectFieldOrAsterisk, ...SelectFieldOrAsterisk[]]): SelectSelectAsteriskOrExpressionsStep<Entry>
});

export type {
  SelectSelectStep,
  SelectSelectAfterSelectStep,
  SelectSelectAfterDistinctStep,
  SelectSelectAsteriskOrExpressionsStep
};
