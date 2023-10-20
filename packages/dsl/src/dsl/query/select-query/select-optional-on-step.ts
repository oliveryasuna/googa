import type {Record as RecordType} from '../../record';
import type {SelectJoinStep} from './select-join-step';
import type {SelectJoinPartitionByStep} from './select-join-partition-by-step';

type SelectOptionalOnStep<Record extends RecordType> = (SelectJoinStep<Record> & SelectJoinPartitionByStep<Record> & {});

export type {
  SelectOptionalOnStep
};
