import {AbstractNamed} from '../../dsl';
import type {_Key} from '../_key';

abstract class _AbstractKey extends AbstractNamed implements _Key {

  private readonly __isDeferrable: boolean;

  private readonly __isInitiallyDeferred: boolean;

  public constructor(name: string, comment: string, isDeferrable: boolean, isInitiallyDeferred: boolean) {
    super(name, comment);

    this.__isDeferrable = isDeferrable;
    this.__isInitiallyDeferred = isInitiallyDeferred;
  }

  public get isDeferrable(): boolean {
    return this.__isDeferrable;
  }

  public get isInitiallyDeferred(): boolean {
    return this.__isInitiallyDeferred;
  }

}

export {
  _AbstractKey
};
