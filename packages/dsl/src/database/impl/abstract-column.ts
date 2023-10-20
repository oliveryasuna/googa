import type {Table as TableType} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema as SchemaType} from '../schema';
import {AbstractField, AbstractNamed} from '../../dsl';
import type {Column} from '../column';

abstract class AbstractColumn<
    Table extends TableType<Table, Catalog, Schema>,
    Catalog extends CatalogType<Catalog>,
    Schema extends SchemaType<Schema, Catalog>,
    Type
>
    extends AbstractField<Type>
    implements Column<Table, Catalog, Schema, Type> {

  private readonly __table: Table;

  private readonly __type: Type;

  public constructor(name: string, comment: string, table: Table, type: Type) {
    super(AbstractNamed.qualify(table, name), comment);

    this.__table = table;
    this.__type = type;
  }

  public override toSql(): string {
    return this.name;
  }

  public get table(): Table {
    return this.__table;
  }

  public get type(): Type {
    return this.__type;
  }

}

export {
  AbstractColumn
};
