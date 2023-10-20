import type {Record as RecordType} from '../record';
import type {SelectOnStep} from './select-on-step';

type SelectJoinPartitionByStep<Record extends RecordType> = (SelectOnStep<Record> & {});

export type {
  SelectJoinPartitionByStep
};
