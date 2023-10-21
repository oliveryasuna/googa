import type {Field} from '../field';

// TODO: Add null/undefined to boolean?
type Condition = (Field<boolean> & {
  // TODO: Functions.
});

export type {
  Condition
};
