import type {SelectIntoStep} from './select-into-step';
import type {Record as RecordType} from '../../record';
import type {SelectFieldOrAsterisk} from '../../field';

type SelectDistinctOnStep<Record extends RecordType> = (SelectIntoStep<Record> & {
  on(...fields: SelectFieldOrAsterisk[]): SelectIntoStep<Record>,
  distinctOn(...fields: SelectFieldOrAsterisk[]): SelectIntoStep<Record>
});

export type {
  SelectDistinctOnStep
};
