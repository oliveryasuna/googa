import {AbstractNamed} from '../../dsl';
import type {Catalog as CatalogType} from '../catalog';
import type {Schema} from '../schema';

abstract class AbstractCatalog<Catalog extends CatalogType<Catalog>> extends AbstractNamed implements CatalogType<Catalog> {

  private readonly __schemas: Schema<any, Catalog>[];

  public constructor(name: string, comment: string, schemas: Schema<any, Catalog>[]) {
    super(name, comment);

    this.__schemas = schemas;
  }

  public get schemas(): Schema<any, Catalog>[] {
    return this.__schemas;
  }

}

export {
  AbstractCatalog
};
