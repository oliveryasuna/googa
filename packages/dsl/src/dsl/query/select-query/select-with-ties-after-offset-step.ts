import type {SelectForUpdateStep} from './select-for-update-step';
import type {Record as RecordType} from '../../record';

type SelectWithTiesAfterOffsetStep<Record extends RecordType> = (SelectForUpdateStep<Record> & {
  // TODO: withTies.
  withTies(): SelectForUpdateStep<Record>
});

export type {
  SelectWithTiesAfterOffsetStep
};
