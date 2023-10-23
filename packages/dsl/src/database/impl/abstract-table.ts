import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import type {Entry as EntryType} from '../../dsl';
import {AbstractNamed} from '../../dsl';
import type {Column} from '../column';
import type {UniqueKey} from '../unique-key';
import type {ForeignKey} from '../foreign-key';

abstract class AbstractTable<
    Table extends TableType<Table, Catalog, Schema, Entry>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    Entry extends EntryType
>
    extends AbstractNamed
    implements TableType<Table, Catalog, Schema, Entry> {

  private readonly __schema: Schema;

  private readonly __columns: Column<Table, Catalog, Schema, Entry, unknown>[];

  private readonly __primaryKey: (UniqueKey<Table, Catalog, Schema, Entry> | null | undefined);

  private readonly __uniqueKeys: UniqueKey<Table, Catalog, Schema, Entry>[];

  private readonly __foreignKeys: ForeignKey<Table, Schema, Entry, any, any, any, Catalog>[];

  public constructor(
      name: string,
      comment: string,
      schema: Schema,
      columns: Column<Table, Catalog, Schema, Entry, unknown>[],
      primaryKey: (UniqueKey<Table, Catalog, Schema, Entry> | null | undefined),
      uniqueKeys: UniqueKey<Table, Catalog, Schema, Entry>[],
      foreignKeys: ForeignKey<Table, Schema, Entry, any, any, any, Catalog>[]
  ) {
    super(AbstractNamed.qualify(schema, name), comment);

    this.__schema = schema;
    this.__columns = columns;
    this.__primaryKey = primaryKey;
    this.__uniqueKeys = uniqueKeys;
    this.__foreignKeys = foreignKeys;
  }

  public toSql(): string {
    return this.name;
  }

  public get schema(): Schema {
    return this.__schema;
  }

  public get columns(): Column<Table, Catalog, Schema, Entry, unknown>[] {
    return this.__columns;
  }

  public get primaryKey(): (UniqueKey<Table, Catalog, Schema, Entry> | null | undefined) {
    return this.__primaryKey;
  }

  public get uniqueKeys(): UniqueKey<Table, Catalog, Schema, Entry>[] {
    return this.__uniqueKeys;
  }

  public get foreignKeys(): ForeignKey<Table, Schema, Entry, any, any, any, Catalog>[] {
    return this.__foreignKeys;
  }

}

export {
  AbstractTable as default
};
