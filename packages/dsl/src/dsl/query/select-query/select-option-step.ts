import type {SelectUnionStep} from './select-union-step';
import type {Entry as EntryType} from '../../entry';

type SelectOptionStep<Entry extends EntryType> = (SelectUnionStep<Entry> & {
  option(str: string): SelectUnionStep<Entry>
});

export type {
  SelectOptionStep
};
