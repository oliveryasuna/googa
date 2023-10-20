import type {SelectForStep} from './select-for-step';
import type {Record as RecordType} from '../../record';

type SelectForUpdateWaitStep<Record extends RecordType> = (SelectForStep<Record> & {
  wait(seconds: number): SelectForStep<Record>,
  noWait(): SelectForStep<Record>,
  skipLocked(): SelectForStep<Record>
});

export type {
  SelectForUpdateWaitStep
};
