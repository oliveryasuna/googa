import type {SelectWindowStep} from './select-window-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectHavingConditionStep} from './select-having-condition-step';

type SelectHavingStep<Entry extends EntryType> = (SelectWindowStep<Entry> & {
  // TODO: having.
  having(): SelectHavingConditionStep<Entry>
});

export type {
  SelectHavingStep
};
