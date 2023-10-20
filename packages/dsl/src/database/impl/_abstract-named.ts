import type {_Named} from '../_named';

abstract class _AbstractNamed implements _Named {

  protected static qualify(qualifier: _Named, name: string): string {
    return `${qualifier.name}.${name}`;
  }

  private readonly __name: string;

  private readonly __comment: string;

  public constructor(name: string, comment: string) {
    this.__name = name;
    this.__comment = comment;
  }

  public get name(): string {
    return this.__name;
  }

  public get comment(): string {
    return this.__comment;
  }

}

export {
  _AbstractNamed
};
