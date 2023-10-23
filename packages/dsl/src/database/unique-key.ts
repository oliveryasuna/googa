import type {Table as TableType} from './table';
import type {Catalog as CatalogType} from './catalog';
import type {Schema as SchemaType} from './schema';
import type {_Key} from './_key';
import type {Column} from './column';
import type {Entry} from '../dsl';

type UniqueKey<
    Table extends TableType<Table, Catalog, Schema, TableEntry>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    TableEntry extends Entry
> =
    (_Key & {
      table: Table,
      columns: Column<Table, Catalog, Schema, TableEntry, unknown>[],
      isPrimary: boolean
    });

export type {
  UniqueKey
};
