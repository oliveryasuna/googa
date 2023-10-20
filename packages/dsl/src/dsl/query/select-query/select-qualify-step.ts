import type {SelectQualifyConditionStep} from './select-qualify-condition-step';
import type {SelectOrderByStep} from './select-order-by-step';
import type {Record as RecordType} from '../../record';

type SelectQualifyStep<Record extends RecordType> = (SelectOrderByStep<Record> & {
  // TODO: qualify.
  qualify(): SelectQualifyConditionStep<Record>
});

export type {
  SelectQualifyStep
};
