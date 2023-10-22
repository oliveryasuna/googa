import type {SelectForStep} from './select-for-step';
import type {Entry as EntryType} from '../../entry';

type SelectForUpdateWaitStep<Record extends EntryType> = (SelectForStep<Record> & {
  wait(seconds: number): SelectForStep<Record>,
  noWait(): SelectForStep<Record>,
  skipLocked(): SelectForStep<Record>
});

export type {
  SelectForUpdateWaitStep
};
