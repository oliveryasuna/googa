import type {Entry4} from '../entry';
import {AbstractEntry} from './abstract-entry';
import type {Field} from '../../field';

class EntryImpl4<T1, T2, T3, T4> extends AbstractEntry implements Entry4<T1, T2, T3, T4> {

  public field1<T1>(): Field<T1> {
    return (this.fields[0] as Field<T1>);
  }

  public field2<T2>(): Field<T2> {
    return (this.fields[1] as Field<T2>);
  }

  public field3<T3>(): Field<T3> {
    return (this.fields[2] as Field<T3>);
  }

  public field4<T4>(): Field<T4> {
    return (this.fields[3] as Field<T4>);
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

  public get3<T3>(): T3 {
    return (this.get(2) as T3);
  }

  public set3(t3: T3): void {
    this.set(this.field3(), t3);
  }

  public get4<T4>(): T4 {
    return (this.get(3) as T4);
  }

  public set4(t4: T4): void {
    this.set(this.field4(), t4);
  }

}

export {
  EntryImpl4
};
