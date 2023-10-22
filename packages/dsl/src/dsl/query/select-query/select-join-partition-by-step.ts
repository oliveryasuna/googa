import type {Entry as EntryType} from '../../entry';
import type {SelectOnStep} from './select-on-step';

type SelectJoinPartitionByStep<Entry extends EntryType> = (SelectOnStep<Entry> & {});

export type {
  SelectJoinPartitionByStep
};
