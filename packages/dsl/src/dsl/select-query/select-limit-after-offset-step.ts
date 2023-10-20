import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentAfterOffsetStep} from './select-limit-percent-after-offset-step';
import type {Record as RecordType} from '../record';

type SelectLimitAfterOffsetStep<Record extends RecordType> = (SelectForUpdateStep<Record> & {
  // TODO: limit.
  limit(): SelectLimitPercentAfterOffsetStep<Record>
});

export type {
  SelectLimitAfterOffsetStep
};
