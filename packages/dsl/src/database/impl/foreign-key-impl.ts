import type {Table} from '../table';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema} from '../schema';
import {AbstractForeignKey} from './abstract-foreign-key';

class ForeignKeyImpl<
    SourceTable extends Table<SourceTable, Catalog, SourceSchema>,
    SourceSchema extends Schema<SourceSchema, Catalog>,
    TargetTable extends Table<TargetTable, Catalog, TargetSchema>,
    TargetSchema extends Schema<TargetSchema, Catalog>,
    Catalog extends CatalogType<Catalog>
>
    extends AbstractForeignKey<SourceTable, SourceSchema, TargetTable, TargetSchema, Catalog> {

}

export {
  ForeignKeyImpl
};
