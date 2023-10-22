import type {SelectQualifyConditionStep} from './select-qualify-condition-step';
import type {SelectOrderByStep} from './select-order-by-step';
import type {Entry as EntryType} from '../../entry';

type SelectQualifyStep<Entry extends EntryType> = (SelectOrderByStep<Entry> & {
  // TODO: qualify.
  qualify(): SelectQualifyConditionStep<Entry>
});

export type {
  SelectQualifyStep
};
