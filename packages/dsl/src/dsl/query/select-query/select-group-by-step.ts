import type {SelectHavingStep} from './select-having-step';
import type {Entry as EntryType} from '../../entry';
import type {GroupField} from '../../field';

type SelectGroupByStep<Entry extends EntryType> = (SelectHavingStep<Entry> & {
  groupBy(...fields: GroupField[]): SelectHavingStep<Entry>,

  groupByDistinct(...fields: GroupField[]): SelectHavingStep<Entry>
});

export type {
  SelectGroupByStep
};
