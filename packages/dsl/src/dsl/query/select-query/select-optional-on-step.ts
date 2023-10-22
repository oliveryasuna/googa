import type {Entry as EntryType} from '../../entry';
import type {SelectJoinStep} from './select-join-step';
import type {SelectJoinPartitionByStep} from './select-join-partition-by-step';

type SelectOptionalOnStep<Record extends EntryType> = (SelectJoinStep<Record> & SelectJoinPartitionByStep<Record> & {});

export type {
  SelectOptionalOnStep
};
