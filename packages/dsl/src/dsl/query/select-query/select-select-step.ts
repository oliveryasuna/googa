import type {SelectDistinctOnStep} from './select-distinct-on-step';
import type {Entry as EntryType} from '../../entry';
import type {SelectFieldOrAsterisk} from '../../field';

type SelectSelectStep<Entry extends EntryType> = (SelectDistinctOnStep<Entry> & {
  select(...fields: SelectFieldOrAsterisk[]): SelectSelectStep<EntryType>
});

export type {
  SelectSelectStep
};
