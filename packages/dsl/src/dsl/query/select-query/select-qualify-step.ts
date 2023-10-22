import type {SelectQualifyConditionStep} from './select-qualify-condition-step';
import type {SelectOrderByStep} from './select-order-by-step';
import type {Entry as EntryType} from '../../entry';

type SelectQualifyStep<Record extends EntryType> = (SelectOrderByStep<Record> & {
  // TODO: qualify.
  qualify(): SelectQualifyConditionStep<Record>
});

export type {
  SelectQualifyStep
};
