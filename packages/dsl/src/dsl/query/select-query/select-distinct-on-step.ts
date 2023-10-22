import type {SelectIntoStep} from './select-into-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectFieldOrAsterisk} from '../../field';

type SelectDistinctOnStep<Entry extends EntryType> = (SelectIntoStep<Entry> & {
  on(...fields: SelectFieldOrAsterisk[]): SelectIntoStep<Entry>,
  distinctOn(...fields: SelectFieldOrAsterisk[]): SelectIntoStep<Entry>
});

export type {
  SelectDistinctOnStep
};
