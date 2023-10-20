const __IDENTIFIER__: (unique symbol) = Symbol('Identifier.');

type Identifiable<Identifier extends string> = {
  [__IDENTIFIER__]: Identifier
};

export type {
  Identifiable
};
export {
  __IDENTIFIER__
};
