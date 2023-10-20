import type {Table as TableType} from './table';
import type {Catalog as CatalogType} from './catalog';
import type {Schema as SchemaType} from './schema';
import type {_Key} from './_key';
import type {Column} from './column';

type UniqueKey<Table extends TableType<Table, Catalog, Schema>, Catalog extends CatalogType<Catalog>, Schema extends SchemaType<Schema, Catalog>> =
    (_Key & {
      table: Table,
      columns: Column<Table, Catalog, Schema, unknown>[],
      isPrimary: boolean
    });

export type {
  UniqueKey
};
