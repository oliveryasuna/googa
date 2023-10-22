import type {SelectQualifyStep} from './select-qualify-step';
import type {Entry as EntryType} from '../../entry';

type SelectWindowStep<Record extends EntryType> = (SelectQualifyStep<Record> & {
  // TODO: window.
  window(): SelectQualifyStep<Record>
});

export type {
  SelectWindowStep
};
