import type {Entry as EntryType} from '../../entry';
import type {Condition} from '../../condition';
import type {Field} from '../../field';
import type {SelectWindowStep} from './select-window-step';

/**
 * `HAVING condition` step of a `HAVING` clause.
 */
type SelectHavingStep<Entry extends EntryType> = (SelectWindowStep<Entry> & {
  having(condition: Condition): SelectWindowStep<Entry>,
  having(condition: Field<boolean | null>): SelectWindowStep<Entry>
});

export type {
  SelectHavingStep
};
