import type {SelectField} from './select-field';
import type {GroupField} from './group-field';
import type {OrderField} from './order-field';

type Field<Type> = (SelectField<Type> & GroupField & OrderField<Type> & {
  // TODO: Functions.
});

export type {
  Field
};
