import type {Schema} from './schema';
import type {_Named} from './_named';

type Catalog<This extends Catalog<This>> = (_Named & {
  schemas: Schema<any, This>[]
});

export type {
  Catalog
};
