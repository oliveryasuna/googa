import type {SelectWithTiesAfterOffsetStep} from './select-with-ties-after-offset-step';
import type {Record as RecordType} from '../../record';

type SelectLimitPercentAfterOffsetStep<Record extends RecordType> = (SelectWithTiesAfterOffsetStep<Record> & {
  percent(): SelectWithTiesAfterOffsetStep<Record>
});

export type {
  SelectLimitPercentAfterOffsetStep
};
