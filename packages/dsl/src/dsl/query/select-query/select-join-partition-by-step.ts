import type {Entry as EntryType} from '../../entry';
import type {SelectOnStep} from './select-on-step';

type SelectJoinPartitionByStep<Record extends EntryType> = (SelectOnStep<Record> & {});

export type {
  SelectJoinPartitionByStep
};
