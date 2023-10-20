import {CatalogImpl} from '../../src/database/impl/catalog-impl';

class DefaultCatalog extends CatalogImpl<DefaultCatalog> {

  public static readonly DEFAULT = new DefaultCatalog();

  private constructor() {
    super('', '', []);
  }

}

export {
  DefaultCatalog
};
