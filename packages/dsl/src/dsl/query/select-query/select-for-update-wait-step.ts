import type {SelectForStep} from './select-for-step';
import type {Entry as EntryType} from '../../entry';

type SelectForUpdateWaitStep<Entry extends EntryType> = (SelectForStep<Entry> & {
  wait(seconds: number): SelectForStep<Entry>,
  noWait(): SelectForStep<Entry>,
  skipLocked(): SelectForStep<Entry>
});

export type {
  SelectForUpdateWaitStep
};
