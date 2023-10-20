import type {SelectHavingStep} from './select-having-step';
import type {Record as RecordType} from '../record';
import type {GroupField} from '../field';

type SelectGroupByStep<Record extends RecordType> = (SelectHavingStep<Record> & {
  groupBy(...fields: GroupField[]): SelectHavingStep<Record>,

  groupByDistinct(...fields: GroupField[]): SelectHavingStep<Record>
});

export type {
  SelectGroupByStep
};
