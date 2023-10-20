import type {SelectLimitStep} from './select-limit-step';
import type {Record as RecordType} from '../../record';

type SelectOrderByStep<Record extends RecordType> = (SelectLimitStep<Record> & {
  // TODO: orderBy.
});

export type {
  SelectOrderByStep
};
