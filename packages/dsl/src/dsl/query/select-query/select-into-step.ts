import type {SelectFromStep} from './select-from-step';
import type {Entry as EntryType} from '../../entry';
import type {Table} from '../../../database';

type SelectIntoStep<Record extends EntryType> = (SelectFromStep<Record> & {
  into(table: Table<any, any, any>): SelectFromStep<EntryType>
});

export type {
  SelectIntoStep
};
