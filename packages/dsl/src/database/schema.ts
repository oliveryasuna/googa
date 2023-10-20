import type {Catalog as CatalogType} from './catalog';
import type {Table} from './table';
import type {Named} from '../dsl';

type Schema<This extends Schema<This, Catalog>, Catalog extends CatalogType<Catalog>> = (Named & {
  catalog: Catalog,
  tables: Table<any, Catalog, This>[]
});

export type {
  Schema
};
