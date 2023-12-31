import type {Schema as SchemaType} from '../schema';
import type {Catalog as CatalogType} from '../catalog';
import {AbstractNamed} from '../../dsl';
import type {Table} from '../table';

abstract class AbstractSchema<Schema extends SchemaType<Schema, Catalog>, Catalog extends CatalogType<Catalog>>
    extends AbstractNamed
    implements SchemaType<Schema, Catalog> {

  private readonly __catalog: Catalog;

  private readonly __tables: Table<any, Catalog, Schema, any>[];

  public constructor(name: string, comment: string, catalog: Catalog, tables: Table<any, Catalog, Schema, any>[]) {
    super(AbstractNamed.qualify(catalog, name), comment);

    this.__catalog = catalog;
    this.__tables = tables;
  }

  public get catalog(): Catalog {
    return this.__catalog;
  }

  public get tables(): Table<any, Catalog, Schema, any>[] {
    return this.__tables;
  }

}

export {
  AbstractSchema
};
