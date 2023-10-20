import type {SelectFromStep} from './select-from-step';
import type {Record as RecordType} from '../record';
import type {Table} from '../../database';

type SelectIntoStep<Record extends RecordType> = (SelectFromStep<Record> & {
  into(table: Table<any, any, any>): SelectFromStep<RecordType>
});

export type {
  SelectIntoStep
};
