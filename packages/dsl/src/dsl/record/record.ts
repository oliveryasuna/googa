import type {Field} from '../index';

type Record = {
  // Fields
  //--------------------------------------------------

  fields: Field<unknown>[],
  field(index: number): (Field<unknown> | undefined),
  field(name: string): (Field<unknown> | undefined),

  // Values
  //--------------------------------------------------

  get<Type>(field: Field<Type>): (Type | undefined),
  get<Type>(field: Field<Type>, defaultValue: Type): Type,
  get<Type>(field: Field<Type>, defaultValueProvider: (() => Type)): Type,
  get(index: number): (unknown | undefined),
  get<Type>(index: number, defaultValue: Type): Type,
  get<Type>(index: number, defaultValueProvider: (() => Type)): Type,
  get(name: string): (unknown | undefined),
  get<Type>(name: string, defaultValue: Type): Type,
  get<Type>(name: string, defaultValueProvider: (() => Type)): Type,

  set<Type>(field: Field<Type>, value: (Type | undefined)): void,

  // Miscellaneous
  //--------------------------------------------------

  size: number
};

type FieldGetters<Types extends any[]> = { [Key in (keyof Types) as `field${Extract<Key, string>}`]: (() => Field<Types[Key]>) };
type ValueGetters<Types extends any[]> = { [Key in (keyof Types) as `get${Extract<Key, string>}`]: (() => (Types[Key] | undefined)) };
type ValueSetters<Types extends any[]> = { [Key in (keyof Types) as `set${Extract<Key, string>}`]: ((value: Types[Key]) => void) };
// TODO: type ValueIndices<Types extends any[]> = { [Key in (keyof Types)]: Types[Key] };?

type RecordN<Types extends any[]> = (Record & FieldGetters<Types> & ValueGetters<Types> & ValueSetters<Types>);

type Record1<T1> = RecordN<[T1]>;
type Record2<T1, T2> = RecordN<[T1, T2]>;
// TODO: Up to 22.

export type {
  Record,
  RecordN,
  Record1,
  Record2
};
