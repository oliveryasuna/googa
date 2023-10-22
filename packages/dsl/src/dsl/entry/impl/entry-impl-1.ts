import type {Entry1} from '../entry';
import {AbstractEntry} from './abstract-entry';
import type {Field} from '../../field';

class EntryImpl1<T1> extends AbstractEntry implements Entry1<T1> {

  public field1<T1>(): Field<T1> {
    return (this.fields[0] as Field<T1>);
  }

  public get1<T1>(): T1 {
    return (this.get(0) as T1);
  }

  public set1(t1: T1): void {
    this.set(this.field1(), t1);
  }

}

export {
  EntryImpl1
};
