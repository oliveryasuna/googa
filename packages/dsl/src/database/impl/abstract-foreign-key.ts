import {_AbstractKey} from './_abstract-key';
import type {Table} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema} from '../schema';
import type {ForeignKey, ReferentialAction} from '../foreign-key';
import type {Column} from '../column';

abstract class AbstractForeignKey<
    SourceTable extends Table<SourceTable, Catalog, SourceSchema>,
    SourceSchema extends Schema<SourceSchema, Catalog>,
    TargetTable extends Table<TargetTable, Catalog, TargetSchema>,
    TargetSchema extends Schema<TargetSchema, Catalog>,
    Catalog extends CatalogType<Catalog>
>
    extends _AbstractKey
    implements ForeignKey<SourceTable, SourceSchema, TargetTable, TargetSchema, Catalog> {

  private readonly __sourceTable: SourceTable;

  private readonly __targetTable: TargetTable;

  private readonly __columns: Map<Column<SourceTable, Catalog, SourceSchema, unknown>, Column<TargetTable, Catalog, TargetSchema, unknown>>;

  private readonly __onUpdate: ReferentialAction;

  private readonly __onDelete: ReferentialAction;

  public constructor(
      name: string,
      comment: string,
      sourceTable: SourceTable,
      targetTable: TargetTable,
      columns: Map<Column<SourceTable, Catalog, SourceSchema, unknown>, Column<TargetTable, Catalog, TargetSchema, unknown>>,
      onUpdate: ReferentialAction,
      onDelete: ReferentialAction
  ) {
    super(_AbstractKey.qualify(sourceTable, name), comment, false, false);

    this.__sourceTable = sourceTable;
    this.__targetTable = targetTable;
    this.__columns = columns;
    this.__onUpdate = onUpdate;
    this.__onDelete = onDelete;
  }

  public get sourceTable(): SourceTable {
    return this.__sourceTable;
  }

  public get targetTable(): TargetTable {
    return this.__targetTable;
  }

  public get columns(): Map<Column<SourceTable, Catalog, SourceSchema, unknown>, Column<TargetTable, Catalog, TargetSchema, unknown>> {
    return this.__columns;
  }

  public get onUpdate(): ReferentialAction {
    return this.__onUpdate;
  }

  public get onDelete(): ReferentialAction {
    return this.__onDelete;
  }

}

export {
  AbstractForeignKey
};
