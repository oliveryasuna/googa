import type {SelectLimitStep} from './select-limit-step';
import type {Entry as EntryType} from '../../entry';

type SelectOrderByStep<Record extends EntryType> = (SelectLimitStep<Record> & {
  // TODO: orderBy.
});

export type {
  SelectOrderByStep
};
