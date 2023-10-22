import type {SelectQualifyStep} from './select-qualify-step';
import type {Entry as EntryType} from '../../entry';

type SelectWindowStep<Entry extends EntryType> = (SelectQualifyStep<Entry> & {
  // TODO: window.
  window(): SelectQualifyStep<Entry>
});

export type {
  SelectWindowStep
};
