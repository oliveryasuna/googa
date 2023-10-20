import type {Schema as SchemaType} from './schema';
import type {Catalog as CatalogType} from './catalog';
import type {GroupField, SelectField, TableLike} from '../dsl';
import type {UniqueKey} from './unique-key';
import type {ForeignKey} from './foreign-key';
import type {Column} from './column';

// TODO: Type-safe record.
//       Make sure to pass to `TableLike` and `SelectField`.
type Table<This extends Table<This, Catalog, Schema>, Catalog extends CatalogType<Catalog>, Schema extends SchemaType<Schema, Catalog>> =
    (TableLike<any> & GroupField & SelectField<any> & {
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
