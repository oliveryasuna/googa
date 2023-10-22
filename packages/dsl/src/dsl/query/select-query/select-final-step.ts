import type {SelectQuery} from './select-query';
import type {Entry as EntryType} from '../../entry';

type SelectFinalStep<Record extends EntryType> = (SelectQuery<Record> & {});

export type {
  SelectFinalStep
};
