import {_AbstractKey} from './_abstract-key';
import type {UniqueKey} from '../unique-key';
import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import type {Column} from '../column';
import {_AbstractNamed} from './_abstract-named';

abstract class AbstractUniqueKey<
    Table extends TableType<Table, Catalog, Schema>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>
>
    extends _AbstractKey
    implements UniqueKey<Table, Catalog, Schema> {

  private readonly __table: Table;

  private readonly __columns: Column<Table, Catalog, Schema, unknown>[];

  private readonly __isPrimary: boolean;

  public constructor(name: string, comment: string, table: Table, columns: Column<Table, Catalog, Schema, unknown>[], isPrimary: boolean) {
    super(_AbstractNamed.qualify(table, name), comment, false, false);

    this.__table = table;
    this.__columns = columns;
    this.__isPrimary = isPrimary;
  }

  public get table(): Table {
    return this.__table;
  }

  public get columns(): Column<Table, Catalog, Schema, unknown>[] {
    return this.__columns;
  }

  public get isPrimary(): boolean {
    return this.__isPrimary;
  }

}

export {
  AbstractUniqueKey
};
