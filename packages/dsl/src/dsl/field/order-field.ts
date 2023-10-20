import type {QueryPart} from '../query/query-part';

/**
 * A field that can be used in an `ORDER BY` clause.
 */
// @ts-expect-error: TS6133 because may use.
type OrderField<Type> = (QueryPart & {});

export type {
  OrderField
};
