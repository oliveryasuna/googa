import type {Catalog as CatalogType} from './catalog';
import type {Schema as SchemaType} from './schema';
import type {Table as TableType} from './table';
import type {_Named} from './_named';

type Column<
    Table extends TableType<Table, Catalog, Schema>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    Type
> = (_Named & {
  table: Table,
  type: Type
});

export type {
  Column
};
