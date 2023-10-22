import type {SelectHavingStep} from './select-having-step';
import type {Entry as EntryType} from '../../entry';
import type {GroupField} from '../../field';

type SelectGroupByStep<Record extends EntryType> = (SelectHavingStep<Record> & {
  groupBy(...fields: GroupField[]): SelectHavingStep<Record>,

  groupByDistinct(...fields: GroupField[]): SelectHavingStep<Record>
});

export type {
  SelectGroupByStep
};
