import type {SelectWindowStep} from './select-window-step';
import type {Record as RecordType} from '../../record';
import type {SelectHavingConditionStep} from './select-having-condition-step';

type SelectHavingStep<Record extends RecordType> = (SelectWindowStep<Record> & {
  // TODO: having.
  having(): SelectHavingConditionStep<Record>
});

export type {
  SelectHavingStep
};
