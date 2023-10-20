import type {SelectQuery} from './select-query';
import type {Record as RecordType} from '../record';

type SelectFinalStep<Record extends RecordType> = (SelectQuery<Record> & {});

export type {
  SelectFinalStep
};
