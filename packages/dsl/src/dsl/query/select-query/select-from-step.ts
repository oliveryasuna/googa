import type {Entry as EntryType} from '../../entry';
import type {TableLike} from '../../table-like';
import type {Condition} from '../../condition';
import type {Field} from '../../field';
import type {SelectWhereStep} from './select-where-step';

/**
 * `FROM from_item [, ...]` step of a `FROM` clause.
 */
type SelectFromStep<Entry extends EntryType> = {
  from(...tables: [TableLike<any>, ...TableLike<any>[]]): SelectFromJoinStep<Entry>
};

/**
 * Join utility for the `FROM` clause.
 */
// TODO: Natural joins.
// TODO: Cross joins.
// TODO: Lateral joins.
type SelectFromJoinStep<Entry extends EntryType> = (SelectFromJoinJoinTypeStep<Entry> & SelectWhereStep<Entry>);

/**
 * `join_type` step of a `FROM` clause.
 */
type SelectFromJoinJoinTypeStep<Entry extends EntryType> = {
  join(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  inner(): SelectFromJoinAfterInnerJoinTypePartStep<Entry>,

  // TODO: `this.inner().join(table)`.
  innerJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  left(): SelectFromJoinAfterLeftJoinTypePartStep<Entry>,

  // TODO: `this.left().join(table)`.
  leftJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  // TODO: `this.left().outer().join(table)`.
  leftOuterJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  right(): SelectFromJoinAfterRightJoinTypePartStep<Entry>,

  // TODO: `this.right().join(table)`.
  rightJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  // TODO: `this.right().outer().join(table)`.
  rightOuterJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  full(): SelectFromJoinAfterFullJoinTypePartStep<Entry>,

  // TODO: `this.full().join(table)`.
  fullJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  // TODO: `this.full().outer().join(table)`.
  fullOuterJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>
};

type SelectFromJoinAfterInnerJoinTypePartStep<Entry extends EntryType> = {
  join(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>
};

type SelectFromJoinAfterLeftJoinTypePartStep<Entry extends EntryType> = {
  outerJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  join(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>
};

type SelectFromJoinAfterRightJoinTypePartStep<Entry extends EntryType> = {
  outerJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  join(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>
};

type SelectFromJoinAfterFullJoinTypePartStep<Entry extends EntryType> = {
  outerJoin(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>,

  join(table: TableLike<any>): SelectFromJoinAfterJoinTypeStep<Entry>
};

/**
 * `ON join_condition` or `USING (join_column [, ...]) [AS join_using_alias]`
 * step of a `FROM` clause.
 */
type SelectFromJoinAfterJoinTypeStep<Entry extends EntryType> = {
  on(condition: Condition): SelectFromJoinStep<Entry>,

  using(...fields: Field<any>[]): SelectFromJoinStep<Entry>
};

export type {
  SelectFromStep,
  SelectFromJoinStep,
  SelectFromJoinJoinTypeStep,
  SelectFromJoinAfterJoinTypeStep,
  SelectFromJoinAfterInnerJoinTypePartStep,
  SelectFromJoinAfterLeftJoinTypePartStep,
  SelectFromJoinAfterRightJoinTypePartStep,
  SelectFromJoinAfterFullJoinTypePartStep
};
