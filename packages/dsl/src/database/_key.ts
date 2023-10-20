import type {Named} from '../dsl';

type _Key = (Named & {
  isDeferrable: boolean,
  isInitiallyDeferred: boolean
});

export type {
  _Key
};
