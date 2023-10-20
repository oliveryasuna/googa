import type {SelectWithTiesStep} from './select-with-ties-step';
import type {Record as RecordType} from '../../record';

type SelectLimitPercentStep<Record extends RecordType> = (SelectWithTiesStep<Record> & {
  percent(): SelectWithTiesStep<Record>
});

export type {
  SelectLimitPercentStep
};
