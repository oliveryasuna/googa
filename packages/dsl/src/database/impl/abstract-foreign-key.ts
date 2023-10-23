import {_AbstractKey} from './_abstract-key';
import type {Table} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema} from '../schema';
import type {ForeignKey, ReferentialAction} from '../foreign-key';
import type {Column} from '../column';
import type {Entry} from '../../dsl';

abstract class AbstractForeignKey<
    SourceTable extends Table<SourceTable, Catalog, SourceSchema, SourceTableEntry>,
    SourceSchema extends Schema<SourceSchema, Catalog>,
    SourceTableEntry extends Entry,
    TargetTable extends Table<TargetTable, Catalog, TargetSchema, TargetTableEntry>,
    TargetSchema extends Schema<TargetSchema, Catalog>,
    TargetTableEntry extends Entry,
    Catalog extends CatalogType<Catalog>
>
    extends _AbstractKey
    implements ForeignKey<SourceTable, SourceSchema, SourceTableEntry, TargetTable, TargetSchema, TargetTableEntry, Catalog> {

  private readonly __sourceTable: SourceTable;

  private readonly __targetTable: TargetTable;

  private readonly __columns:
      Map<Column<SourceTable, Catalog, SourceSchema, SourceTableEntry, unknown>, Column<TargetTable, Catalog, TargetSchema, TargetTableEntry, unknown>>;

  private readonly __onUpdate: ReferentialAction;

  private readonly __onDelete: ReferentialAction;

  public constructor(
      name: string,
      comment: string,
      sourceTable: SourceTable,
      targetTable: TargetTable,
      columns:
          Map<Column<SourceTable, Catalog, SourceSchema, SourceTableEntry, unknown>, Column<TargetTable, Catalog, TargetSchema, TargetTableEntry, unknown>>,
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

  public get columns():
      Map<Column<SourceTable, Catalog, SourceSchema, SourceTableEntry, unknown>, Column<TargetTable, Catalog, TargetSchema, TargetTableEntry, unknown>> {
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
