import type {Schema as SchemaType} from '../schema';
import type {Catalog as CatalogType} from '../catalog';
import {AbstractSchema} from './abstract-schema';

class SchemaImpl<Schema extends SchemaType<Schema, Catalog>, Catalog extends CatalogType<Catalog>> extends AbstractSchema<Schema, Catalog> {

}

export {
  SchemaImpl
};
