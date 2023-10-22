import type {Entry as EntryType} from '../../entry';
import type {SelectJoinStep} from './select-join-step';
import type {SelectJoinPartitionByStep} from './select-join-partition-by-step';

type SelectOptionalOnStep<Entry extends EntryType> = (SelectJoinStep<Entry> & SelectJoinPartitionByStep<Entry> & {});

export type {
  SelectOptionalOnStep
};
