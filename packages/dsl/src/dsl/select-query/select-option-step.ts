import type {SelectUnionStep} from './select-union-step';
import type {Record as RecordType} from '../record';

type SelectOptionStep<Record extends RecordType> = (SelectUnionStep<Record> & {
  option(str: string): SelectUnionStep<Record>
});

export type {
  SelectOptionStep
};
