import type {Schema} from './schema';
import type {Named} from '../dsl';

type Catalog<This extends Catalog<This>> = (Named & {
  schemas: Schema<any, This>[]
});

export type {
  Catalog
};
