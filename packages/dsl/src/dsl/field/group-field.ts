import type {QueryPart} from '../query';

/**
 * A field that can be used in a `GROUP BY` clause.
 */
type GroupField = (QueryPart & {});

export type {
  GroupField
};
