import type {SelectOptionStep} from './select-option-step';
import type {Record as RecordType} from '../record';

type SelectForStep<Record extends RecordType> = (SelectOptionStep<Record> & {});

export type {
  SelectForStep
};
