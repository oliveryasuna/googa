import type {SelectSelectStep, SelectWhereStep} from '../query/select-query';
import type {Record as RecordType, Record1, Record2} from '../record';
import type {SelectField, SelectFieldOrAsterisk} from '../field';
import type {TableLike} from '../table-like';

type DslContext = {
  // `SELECT` query
  //--------------------------------------------------

  selectFrom<Record extends RecordType>(table: TableLike<Record>): SelectWhereStep<Record>,

  select(...fields: SelectFieldOrAsterisk[]): SelectSelectStep<RecordType>,
  select<T1>(field1: SelectField<T1>): SelectSelectStep<Record1<T1>>,
  select<T1, T2>(field1: SelectField<T1>, field2: SelectField<T2>): SelectSelectStep<Record2<T1, T2>>,
  // TODO: More.

  selectDistinct(...fields: SelectField<any>[]): SelectSelectStep<RecordType>,
  selectDistinct<T1>(field1: SelectField<T1>): SelectSelectStep<Record1<T1>>,
  selectDistinct<T1, T2>(field1: SelectField<T1>, field2: SelectField<T2>): SelectSelectStep<Record2<T1, T2>>,
  // TODO: More.

  selectZero(): SelectSelectStep<Record1<number>>,
  selectOne(): SelectSelectStep<Record1<number>>,

  selectCount(): SelectSelectStep<Record1<number>>

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
