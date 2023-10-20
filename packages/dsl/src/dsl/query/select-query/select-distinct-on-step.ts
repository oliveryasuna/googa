import type {SelectIntoStep} from './select-into-step';
import type {Record as RecordType} from '../../record';
import type {SelectField} from '../../field';

type SelectDistinctOnStep<Record extends RecordType> = (SelectIntoStep<Record> & {
  on(...fields: SelectField<any>[]): SelectIntoStep<Record>,
  distinctOn(...fields: SelectField<any>[]): SelectIntoStep<Record>
});

export type {
  SelectDistinctOnStep
};
