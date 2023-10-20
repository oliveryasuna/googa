import type {SelectQualifyStep} from './select-qualify-step';
import type {Record as RecordType} from '../../record';

type SelectWindowStep<Record extends RecordType> = (SelectQualifyStep<Record> & {
  // TODO: window.
  window(): SelectQualifyStep<Record>
});

export type {
  SelectWindowStep
};
