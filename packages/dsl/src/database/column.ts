import type {Catalog as CatalogType} from './catalog';
import type {Schema as SchemaType} from './schema';
import type {Table as TableType} from './table';
import type {Entry, Field} from '../dsl';

type Column<
    Table extends TableType<Table, Catalog, Schema, TableEntry>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    TableEntry extends Entry,
    Type
> = (Field<Type> & {
  table: Table
});

export type {
  Column
};
