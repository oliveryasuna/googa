import type {Table} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema} from '../schema';
import {AbstractForeignKey} from './abstract-foreign-key';
import type {Entry} from '../../dsl';

class ForeignKeyImpl<
    SourceTable extends Table<SourceTable, Catalog, SourceSchema, SourceTableEntry>,
    SourceSchema extends Schema<SourceSchema, Catalog>,
    SourceTableEntry extends Entry,
    TargetTable extends Table<TargetTable, Catalog, TargetSchema, TargetTableEntry>,
    TargetSchema extends Schema<TargetSchema, Catalog>,
    TargetTableEntry extends Entry,
    Catalog extends CatalogType<Catalog>
>
    extends AbstractForeignKey<SourceTable, SourceSchema, SourceTableEntry, TargetTable, TargetSchema, TargetTableEntry, Catalog> {

}

export {
  ForeignKeyImpl
};
