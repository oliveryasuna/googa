import type {SelectSelectStep, SelectWhereStep} from '../query';
import type {Entry as EntryType, Entry1, Entry2} from '../entry';
import type {SelectField, SelectFieldOrAsterisk} from '../field';
import type {TableLike} from '../table-like';

type DslContext = {
  // `SELECT` query
  //--------------------------------------------------

  selectFrom<Entry extends EntryType>(table: TableLike<Entry>): SelectWhereStep<Entry>,

  select(...fields: SelectFieldOrAsterisk[]): SelectSelectStep<EntryType>,
  select<T1>(field1: SelectField<T1>): SelectSelectStep<Entry1<T1>>,
  select<T1, T2>(field1: SelectField<T1>, field2: SelectField<T2>): SelectSelectStep<Entry2<T1, T2>>,
  // TODO: More.

  selectDistinct(...fields: SelectField<any>[]): SelectSelectStep<EntryType>,
  selectDistinct<T1>(field1: SelectField<T1>): SelectSelectStep<Entry1<T1>>,
  selectDistinct<T1, T2>(field1: SelectField<T1>, field2: SelectField<T2>): SelectSelectStep<Entry2<T1, T2>>,
  // TODO: More.

  selectZero(): SelectSelectStep<Entry1<number>>,
  selectOne(): SelectSelectStep<Entry1<number>>,

  selectCount(): SelectSelectStep<Entry1<number>>

  // TODO: `INSERT` query
  //--------------------------------------------------

  // TODO: `UPDATE` query
  //--------------------------------------------------

  // TODO: `MERGE` query
  //--------------------------------------------------

  // `DELETE` query
  //--------------------------------------------------

};

export type {
  DslContext
};
