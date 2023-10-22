import type {SelectForUpdateWaitStep} from './select-for-update-wait-step';
import type {Entry as EntryType} from '../../entry';
import type {Field} from '../../field';
import type {Table} from '../../../database';

type SelectForUpdateOfStep<Entry extends EntryType> = (SelectForUpdateWaitStep<Entry> & {
  of(...fields: Field<any>[]): SelectForUpdateWaitStep<Entry>,
  of(...tables: Table<any, any, any>[]): SelectForUpdateWaitStep<Entry>
});

export type {
  SelectForUpdateOfStep
};
