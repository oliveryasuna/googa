import type {SelectForUpdateStep} from './select-for-update-step';
import type {Record as RecordType} from '../record';

type SelectOffsetStep<Record extends RecordType> = (SelectForUpdateStep<Record> & {
  offset(offset: number): SelectForUpdateStep<Record>
});

export type {
  SelectOffsetStep
};
