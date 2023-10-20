import type {Catalog as CatalogType} from '../catalog';
import {AbstractCatalog} from './abstract-catalog';

class CatalogImpl<Catalog extends CatalogType<Catalog>> extends AbstractCatalog<Catalog> {

}

export {
  CatalogImpl
};
