import type {Record as RecordType} from '../../record';

// @ts-expect-error: TS6133 because will fix.
type SelectOnStep<Record extends RecordType> = {
  // TODO: Functions.
};

export type {
  SelectOnStep
};
