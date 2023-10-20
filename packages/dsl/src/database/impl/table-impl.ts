import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import AbstractTable from './abstract-table';

class TableImpl<Table extends TableType<Table, Catalog, Schema>, Catalog extends CatalogType<Catalog>, Schema extends SchemaType<Schema, Catalog>>
    extends AbstractTable<Table, Catalog, Schema> {

}

export {
  TableImpl as default
};
