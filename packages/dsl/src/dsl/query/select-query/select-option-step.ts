import type {SelectUnionStep} from './select-union-step';
import type {Entry as EntryType} from '../../entry';

type SelectOptionStep<Record extends EntryType> = (SelectUnionStep<Record> & {
  option(str: string): SelectUnionStep<Record>
});

export type {
  SelectOptionStep
};
