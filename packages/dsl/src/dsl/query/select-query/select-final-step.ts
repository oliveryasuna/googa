import type {SelectQuery} from './select-query';
import type {Entry as EntryType} from '../../entry';

type SelectFinalStep<Entry extends EntryType> = (SelectQuery<Entry> & {});

export type {
  SelectFinalStep
};
