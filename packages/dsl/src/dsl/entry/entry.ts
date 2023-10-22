import type {Field} from '../index';

type Entry = {
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

type IncrementIndex<Index extends string> = (
    Index extends '0' ? '1' :
        Index extends '1' ? '2' :
            Index extends '2' ? '3' :
                Index extends '3' ? '4' :
                    Index extends '4' ? '5' :
                        Index extends '5' ? '6' :
                            Index extends '6' ? '7' :
                                Index extends '7' ? '8' :
                                    Index extends '8' ? '9' :
                                        Index extends '9' ? '10' :
                                            Index extends '10' ? '11' :
                                                Index extends '11' ? '12' :
                                                    Index extends '12' ? '13' :
                                                        Index extends '13' ? '14' :
                                                            Index extends '14' ? '15' :
                                                                Index extends '15' ? '16' :
                                                                    Index extends '16' ? '17' :
                                                                        Index extends '17' ? '18' :
                                                                            Index extends '18' ? '19' :
                                                                                Index extends '19' ? '20' :
                                                                                    Index extends '20' ? '21' :
                                                                                        Index extends '21' ? '22' :
                                                                                            never);

type FieldGetters<Types extends any[]> = {
  [Key in Exclude<(keyof Types), (keyof unknown[])> as `field${IncrementIndex<Extract<Key, string>>}`]: (() => Field<Types[Key]>)
};
type ValueGetters<Types extends any[]> = {
  [Key in Exclude<(keyof Types), (keyof unknown[])> as `get${IncrementIndex<Extract<Key, string>>}`]: (() => (Types[Key] | undefined))
};
type ValueSetters<Types extends any[]> = {
  [Key in Exclude<(keyof Types), (keyof unknown[])> as `set${IncrementIndex<Extract<Key, string>>}`]: ((value: Types[Key]) => void)
};
// TODO: type ValueIndices<Types extends any[]> = { [Key in (keyof Types)]: Types[Key] };?

type EntryN<Types extends any[]> = (Entry & FieldGetters<Types> & ValueGetters<Types> & ValueSetters<Types>);

type Entry1<T1> = EntryN<[T1]>;
type Entry2<T1, T2> = EntryN<[T1, T2]>;
type Entry3<T1, T2, T3> = EntryN<[T1, T2, T3]>;
type Entry4<T1, T2, T3, T4> = EntryN<[T1, T2, T3, T4]>;
type Entry5<T1, T2, T3, T4, T5> = EntryN<[T1, T2, T3, T4, T5]>;
type Entry6<T1, T2, T3, T4, T5, T6> = EntryN<[T1, T2, T3, T4, T5, T6]>;
type Entry7<T1, T2, T3, T4, T5, T6, T7> = EntryN<[T1, T2, T3, T4, T5, T6, T7]>;
type Entry8<T1, T2, T3, T4, T5, T6, T7, T8> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8]>;
type Entry9<T1, T2, T3, T4, T5, T6, T7, T8, T9> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
type Entry10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
type Entry11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]>;
type Entry12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>;
type Entry13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13]>;
type Entry14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14]>;
type Entry15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15]>;
type Entry16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]>;
type Entry17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17]>;
type Entry18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18]>;
type Entry19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19]>;
type Entry20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20]>;
type Entry21<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21]>;
type Entry22<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> =
    EntryN<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22]>;

export type {
  Entry,
  EntryN,
  Entry1,
  Entry2,
  Entry3,
  Entry4,
  Entry5,
  Entry6,
  Entry7,
  Entry8,
  Entry9,
  Entry10,
  Entry11,
  Entry12,
  Entry13,
  Entry14,
  Entry15,
  Entry16,
  Entry17,
  Entry18,
  Entry19,
  Entry20,
  Entry21,
  Entry22
};
