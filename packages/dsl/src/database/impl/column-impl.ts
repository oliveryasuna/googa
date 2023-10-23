import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import {AbstractColumn} from './abstract-column';
import type {Entry as EntryType} from '../../dsl';

class ColumnImpl<
    Table extends TableType<Table, Catalog, Schema, Entry>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    Entry extends EntryType,
    Type
>
    extends AbstractColumn<Table, Catalog, Schema, Entry, Type> {

}

export {
  ColumnImpl
};
