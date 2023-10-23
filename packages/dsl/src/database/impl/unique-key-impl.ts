import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import {AbstractUniqueKey} from './abstract-unique-key';
import type {Entry} from '../../dsl';

class UniqueKeyImpl<
    Table extends TableType<Table, Catalog, Schema, TableEntry>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    TableEntry extends Entry
>
    extends AbstractUniqueKey<Table, Catalog, Schema, TableEntry> {

}

export {
  UniqueKeyImpl
};
