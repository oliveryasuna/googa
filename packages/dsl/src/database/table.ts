import type {Schema as SchemaType} from './schema';
import type {Catalog as CatalogType} from './catalog';
import type {_Named} from './_named';
import type {UniqueKey} from './unique-key';
import type {ForeignKey} from './foreign-key';
import type {Column} from './column';

type Table<This extends Table<This, Catalog, Schema>, Catalog extends CatalogType<Catalog>, Schema extends SchemaType<Schema, Catalog>> = (_Named & {
  schema: Schema,

  columns: Column<This, Catalog, Schema, unknown>[],

  // TODO: identity.

  primaryKey: (UniqueKey<This, Catalog, Schema> | null | undefined),
  uniqueKeys: UniqueKey<This, Catalog, Schema>[],

  foreignKeys: ForeignKey<This, Schema, any, any, Catalog>[]

  // TODO: indexes.

  // TODO: checks.
});

export type {
  Table
};
