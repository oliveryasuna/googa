import {AbstractNamed} from '../../named';
import type {Field} from '../field';

abstract class AbstractField<Type> extends AbstractNamed implements Field<Type> {

  public abstract toSql(): string;

}

export {
  AbstractField
};
