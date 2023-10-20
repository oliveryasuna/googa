import type {SelectForUpdateWaitStep} from './select-for-update-wait-step';
import type {Record as RecordType} from '../../record';
import type {Field} from '../../field';
import type {Table} from '../../../database';

type SelectForUpdateOfStep<Record extends RecordType> = (SelectForUpdateWaitStep<Record> & {
  of(...fields: Field<any>[]): SelectForUpdateWaitStep<Record>,
  of(...tables: Table<any, any, any>[]): SelectForUpdateWaitStep<Record>
});

export type {
  SelectForUpdateOfStep
};
