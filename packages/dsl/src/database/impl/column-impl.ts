import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import {AbstractColumn} from './abstract-column';

class ColumnImpl<
    Table extends TableType<Table, Catalog, Schema>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    Type
>
    extends AbstractColumn<Table, Catalog, Schema, Type> {

}

export {
  ColumnImpl
};
