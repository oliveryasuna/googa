import type {Table} from './table';
import type {Catalog as CatalogType} from './catalog';
import type {Schema} from './schema';
import type {_Key} from './_key';
import type {Column} from './column';

type ReferentialAction = (
    | 'cascade'
    | 'no action'
    | 'restrict'
    | 'set default'
    | 'set null');

type ForeignKey<
    SourceTable extends Table<SourceTable, Catalog, SourceSchema>,
    SourceSchema extends Schema<SourceSchema, Catalog>,
    TargetTable extends Table<TargetTable, Catalog, TargetSchema>,
    TargetSchema extends Schema<TargetSchema, Catalog>,
    Catalog extends CatalogType<Catalog>
> =
    (_Key & {
      sourceTable: SourceTable,
      targetTable: TargetTable,
      columns: Map<Column<SourceTable, Catalog, SourceSchema, unknown>, Column<TargetTable, Catalog, TargetSchema, unknown>>,
      onUpdate: ReferentialAction,
      onDelete: ReferentialAction
    });

export type {
  ReferentialAction,
  ForeignKey
};
