import type {Named} from '../named';
import type {SelectFieldOrAsterisk} from './select-field-or-asterisk';

/**
 * A field that can be used in a `SELECT` clause.
 */
// @ts-expect-error: TS6133 because may be used later.
type SelectField<Type> = (SelectFieldOrAsterisk & Named & {
  // TODO: Functions.
});

export type {
  SelectField
};
