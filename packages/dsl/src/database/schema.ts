import type {Catalog as CatalogType} from './catalog';
import type {Table} from './table';
import type {_Named} from './_named';

type Schema<This extends Schema<This, Catalog>, Catalog extends CatalogType<Catalog>> = (_Named & {
  catalog: Catalog,
  tables: Table<any, Catalog, This>[]
});

export type {
  Schema
};
