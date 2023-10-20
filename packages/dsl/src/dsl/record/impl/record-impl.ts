import type {Record1, Record2} from '../record';
import {AbstractRecord} from './abstract-record';
import type {Field} from '../../field';

// TODO: Why?
// @ts-expect-error: TS2420 because TS isn't smart enough.
class RecordImpl1<T1> extends AbstractRecord implements Record1<T1> {

  public field0<T1>(): Field<T1> {
    return (this.fields[0] as Field<T1>);
  }

  public get0<T1>(): T1 {
    return (this.get(0) as T1);
  }

}

// TODO: Why?
// @ts-expect-error: TS2420 because TS isn't smart enough.
class RecordImpl2<T1, T2> extends AbstractRecord implements Record2<T1, T2> {

  public field0<T1>(): Field<T1> {
    return (this.fields[0] as Field<T1>);
  }

  public field1<T2>(): Field<T2> {
    return (this.fields[1] as Field<T2>);
  }

  public get0<T1>(): T1 {
    return (this.get(0) as T1);
  }

  public get1<T2>(): T2 {
    return (this.get(1) as T2);
  }

}

export {
  RecordImpl1,
  RecordImpl2
};
