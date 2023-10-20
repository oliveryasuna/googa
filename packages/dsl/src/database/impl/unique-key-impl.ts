import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import {AbstractUniqueKey} from './abstract-unique-key';

class UniqueKeyImpl<Table extends TableType<Table, Catalog, Schema>, Catalog extends CatalogType<Catalog>, Schema extends SchemaType<Schema, Catalog>>
    extends AbstractUniqueKey<Table, Catalog, Schema> {

}

export {
  UniqueKeyImpl
};
