import type {Entry as EntryType} from '../../entry';
import type {SelectGroupByStep} from './select-group-by-step';

type SelectConnectByStep<Entry extends EntryType> = (SelectGroupByStep<Entry> & {});

export type {
  SelectConnectByStep
};
