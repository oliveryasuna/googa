import type {SelectOffsetStep} from './select-offset-step';
import type {Record as RecordType} from '../record';

type SelectWithTiesStep<Record extends RecordType> = (SelectOffsetStep<Record> & {
  withTies(): SelectOffsetStep<Record>
});

export type {
  SelectWithTiesStep
};
