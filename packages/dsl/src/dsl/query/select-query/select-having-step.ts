import type {SelectWindowStep} from './select-window-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectHavingConditionStep} from './select-having-condition-step';

type SelectHavingStep<Record extends EntryType> = (SelectWindowStep<Record> & {
  // TODO: having.
  having(): SelectHavingConditionStep<Record>
});

export type {
  SelectHavingStep
};
