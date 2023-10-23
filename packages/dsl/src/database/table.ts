import type {Schema as SchemaType} from './schema';
import type {Catalog as CatalogType} from './catalog';
import type {Entry as EntryType, GroupField, SelectField, TableLike} from '../dsl';
import type {UniqueKey} from './unique-key';
import type {ForeignKey} from './foreign-key';
import type {Column} from './column';

// TODO: Type-safe entry.
//       Make sure to pass to `TableLike` and `SelectField`.
type Table<
    This extends Table<This, Catalog, Schema, Entry>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    Entry extends EntryType
> =
    (TableLike<Entry> & GroupField & SelectField<Entry> & {
      schema: Schema,

      columns: Column<This, Catalog, Schema, Entry, unknown>[],

      // TODO: identity.

      primaryKey: (UniqueKey<This, Catalog, Schema, Entry> | null | undefined),
      uniqueKeys: UniqueKey<This, Catalog, Schema, Entry>[],

      foreignKeys: ForeignKey<This, Schema, Entry, any, any, any, Catalog>[]

      // TODO: indexes.

      // TODO: checks.
    });

export type {
  Table
};
