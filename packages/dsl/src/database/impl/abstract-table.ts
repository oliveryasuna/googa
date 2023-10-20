import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import {_AbstractNamed} from './_abstract-named';
import type {Column} from '../column';
import type {UniqueKey} from '../unique-key';
import type {ForeignKey} from '../foreign-key';

abstract class AbstractTable<Table extends TableType<Table, Catalog, Schema>, Catalog extends CatalogType<Catalog>, Schema extends SchemaType<Schema, Catalog>>
    extends _AbstractNamed
    implements TableType<Table, Catalog, Schema> {

  private readonly __schema: Schema;

  private readonly __columns: Column<Table, Catalog, Schema, unknown>[];

  private readonly __primaryKey: (UniqueKey<Table, Catalog, Schema> | null | undefined);

  private readonly __uniqueKeys: UniqueKey<Table, Catalog, Schema>[];

  private readonly __foreignKeys: ForeignKey<Table, Schema, any, any, Catalog>[];

  public constructor(
      name: string,
      comment: string,
      schema: Schema,
      columns: Column<Table, Catalog, Schema, unknown>[],
      primaryKey: (UniqueKey<Table, Catalog, Schema> | null | undefined),
      uniqueKeys: UniqueKey<Table, Catalog, Schema>[],
      foreignKeys: ForeignKey<Table, Schema, any, any, Catalog>[]
  ) {
    super(_AbstractNamed.qualify(schema, name), comment);

    this.__schema = schema;
    this.__columns = columns;
    this.__primaryKey = primaryKey;
    this.__uniqueKeys = uniqueKeys;
    this.__foreignKeys = foreignKeys;
  }

  public get schema(): Schema {
    return this.__schema;
  }

  public get columns(): Column<Table, Catalog, Schema, unknown>[] {
    return this.__columns;
  }

  public get primaryKey(): (UniqueKey<Table, Catalog, Schema> | null | undefined) {
    return this.__primaryKey;
  }

  public get uniqueKeys(): UniqueKey<Table, Catalog, Schema>[] {
    return this.__uniqueKeys;
  }

  public get foreignKeys(): ForeignKey<Table, Schema, any, any, Catalog>[] {
    return this.__foreignKeys;
  }

}

export {
  AbstractTable as default
};
