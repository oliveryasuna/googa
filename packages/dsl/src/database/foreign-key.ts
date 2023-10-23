import type {Table} from './table';
import type {Catalog as CatalogType} from './catalog';
import type {Schema} from './schema';
import type {_Key} from './_key';
import type {Column} from './column';
import type {Entry} from '../dsl';

type ReferentialAction = (
    | 'cascade'
    | 'no action'
    | 'restrict'
    | 'set default'
    | 'set null');

type ForeignKey<
    SourceTable extends Table<SourceTable, Catalog, SourceSchema, SourceTableEntry>,
    SourceSchema extends Schema<SourceSchema, Catalog>,
    SourceTableEntry extends Entry,
    TargetTable extends Table<TargetTable, Catalog, TargetSchema, TargetTableEntry>,
    TargetSchema extends Schema<TargetSchema, Catalog>,
    TargetTableEntry extends Entry,
    Catalog extends CatalogType<Catalog>
> =
    (_Key & {
      sourceTable: SourceTable,
      targetTable: TargetTable,
      columns:
          Map<Column<SourceTable, Catalog, SourceSchema, SourceTableEntry, unknown>, Column<TargetTable, Catalog, TargetSchema, TargetTableEntry, unknown>>,
      onUpdate: ReferentialAction,
      onDelete: ReferentialAction
    });

export type {
  ReferentialAction,
  ForeignKey
};
