import type {SelectOptionStep} from './select-option-step';
import type {Entry as EntryType} from '../../entry';

type SelectForStep<Record extends EntryType> = (SelectOptionStep<Record> & {});

export type {
  SelectForStep
};
