import type {Entry as EntryType} from '../../entry';
import type {SelectGroupByStep} from './select-group-by-step';

type SelectConnectByStep<Record extends EntryType> = (SelectGroupByStep<Record> & {});

export type {
  SelectConnectByStep
};
