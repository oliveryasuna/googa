import {SchemaImpl} from '../../src/database/impl/schema-impl';
import {DefaultCatalog} from './default-catalog';

class PublicSchema extends SchemaImpl<PublicSchema, DefaultCatalog> {

  public static readonly PUBLIC = new PublicSchema();

  private constructor() {
    super('public', '', DefaultCatalog.DEFAULT, []);
  }

}

export {
  PublicSchema
};
