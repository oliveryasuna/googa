import type {SelectOptionStep} from './select-option-step';
import type {Entry as EntryType} from '../../entry';

type SelectForStep<Entry extends EntryType> = (SelectOptionStep<Entry> & {});

export type {
  SelectForStep
};
