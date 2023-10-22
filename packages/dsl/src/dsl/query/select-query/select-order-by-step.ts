import type {SelectLimitStep} from './select-limit-step';
import type {Entry as EntryType} from '../../entry';

type SelectOrderByStep<Entry extends EntryType> = (SelectLimitStep<Entry> & {
  // TODO: orderBy.
});

export type {
  SelectOrderByStep
};
