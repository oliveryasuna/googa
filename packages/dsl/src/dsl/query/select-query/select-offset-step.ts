import type {Entry as EntryType} from '../../entry';
import type {Field} from '../../field';
import type {SelectFetchStep} from './select-fetch-step';

/**
 * `OFFSET start {ROW | ROWS}` step of an `OFFSET` clause.
 */
type SelectOffsetStep<Entry extends EntryType> = (SelectFetchStep<Entry> & {
  offset(): SelectOffsetAfterOffsetStep<Entry>,
  // TODO: `this.offset().offset(start)`.
  offset(start: Field<number | null>): SelectOffsetAfterOffsetAndStartStep<Entry>,
  // TODO: `this.offset().offset(start)`.
  offset(start: (number | null)): SelectOffsetAfterOffsetAndStartStep<Entry>,

  // TODO: `this.offset(start).row()`.
  offsetRow(start: Field<number | null>): SelectFetchStep<Entry>,
  // TODO: `this.offset(start).row()`.
  offsetRow(start: (number | null)): SelectFetchStep<Entry>,

  // TODO: `this.offset(start).rows()`.
  offsetRows(start: Field<number | null>): SelectFetchStep<Entry>,
  // TODO: `this.offset(start).rows()`.
  offsetRows(start: (number | null)): SelectFetchStep<Entry>
});

/**
 * `start {ROW | ROWS}` step of an `OFFSET` clause.
 */
type SelectOffsetAfterOffsetStep<Entry extends EntryType> = {
  offset(start: Field<number | null>): SelectOffsetAfterOffsetAndStartStep<Entry>,
  offset(start: (number | null)): SelectOffsetAfterOffsetAndStartStep<Entry>,

  // TODO: `this.offset(start).row()`.
  offsetRow(start: Field<number | null>): SelectFetchStep<Entry>,
  // TODO: `this.offset(start).row()`.
  offsetRow(start: (number | null)): SelectFetchStep<Entry>,

  // TODO: `this.offset(start).rows()`.
  offsetRows(start: Field<number | null>): SelectFetchStep<Entry>,
  // TODO: `this.offset(start).rows()`.
  offsetRows(start: (number | null)): SelectFetchStep<Entry>
};

/**
 * `{ROW | ROWS}` step of an `OFFSET` clause.
 */
type SelectOffsetAfterOffsetAndStartStep<Entry extends EntryType> = {
  row(): SelectFetchStep<Entry>,

  rows(): SelectFetchStep<Entry>
};

export type {
  SelectOffsetStep
};
