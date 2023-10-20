import {AbstractSchema} from '../../../src';
import {DefaultCatalog} from './default-catalog';

class PublicSchema extends AbstractSchema<PublicSchema, DefaultCatalog> {

  public static readonly PUBLIC = new PublicSchema();

  private constructor() {
    super('public', '', DefaultCatalog.DEFAULT, []);
  }

}

export {
  PublicSchema
};
