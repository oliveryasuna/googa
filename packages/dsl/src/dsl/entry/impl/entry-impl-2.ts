import type {Entry2} from '../entry';
import {AbstractEntry} from './abstract-entry';
import type {Field} from '../../field';

class EntryImpl2<T1, T2> extends AbstractEntry implements Entry2<T1, T2> {

  public field1<T1>(): Field<T1> {
    return (this.fields[0] as Field<T1>);
  }

  public field2<T2>(): Field<T2> {
    return (this.fields[1] as Field<T2>);
  }

  public get1<T1>(): T1 {
    return (this.get(0) as T1);
  }

  public set1(t1: T1): void {
    this.set(this.field1(), t1);
  }

  public get2<T2>(): T2 {
    return (this.get(1) as T2);
  }

  public set2(t2: T2): void {
    this.set(this.field2(), t2);
  }

}

export {
  EntryImpl2
};
