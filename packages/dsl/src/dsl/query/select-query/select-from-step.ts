import type {Record as RecordType} from '../../record';
import type {SelectWhereStep} from './select-where-step';
import type {SelectJoinStep} from './select-join-step';
import type {TableLike} from '../../table-like';

type SelectFromStep<Record extends RecordType> = (SelectWhereStep<Record> & {
  from(...tables: TableLike<any>[]): SelectJoinStep<Record>
});

export type {
  SelectFromStep
};
