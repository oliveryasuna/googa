import type {Identifiable} from './identifiable';
import {__IDENTIFIER__} from './identifiable';

const isIdentifiable = (<Identifier extends string>(value: unknown): value is Identifiable<Identifier> =>
    ((typeof value === 'object') && (value !== null) && (__IDENTIFIER__ in value)));

const isIdentifiableOf = (<Identifier extends string>(identifier: Identifier) =>
    ((value: unknown): value is Identifiable<Identifier> =>
        (isIdentifiable(value) && (value[__IDENTIFIER__] === identifier))));

export {
  isIdentifiable,
  isIdentifiableOf
};
