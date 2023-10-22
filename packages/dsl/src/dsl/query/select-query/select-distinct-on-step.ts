import type {SelectIntoStep} from './select-into-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectFieldOrAsterisk} from '../../field';

type SelectDistinctOnStep<Record extends EntryType> = (SelectIntoStep<Record> & {
  on(...fields: SelectFieldOrAsterisk[]): SelectIntoStep<Record>,
  distinctOn(...fields: SelectFieldOrAsterisk[]): SelectIntoStep<Record>
});

export type {
  SelectDistinctOnStep
};
