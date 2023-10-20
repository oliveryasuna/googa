type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T];
type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T];

type OnlyRequired<T> = Pick<T, RequiredKeys<T>>;
type OnlyOptional<T> = Pick<T, OptionalKeys<T>>;
type OnlyOptionalRequired<T> = Required<OnlyOptional<T>>;

export type {
  RequiredKeys,
  OptionalKeys,
  OnlyRequired,
  OnlyOptional,
  OnlyOptionalRequired
};
