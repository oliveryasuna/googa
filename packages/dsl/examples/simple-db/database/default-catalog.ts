import {AbstractCatalog} from '../../../src';

class DefaultCatalog extends AbstractCatalog<DefaultCatalog> {

  public static readonly DEFAULT = new DefaultCatalog();

  private constructor() {
    super('', '', []);
  }

}

export {
  DefaultCatalog
};
