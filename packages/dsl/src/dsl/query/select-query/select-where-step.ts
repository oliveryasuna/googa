import type {Entry as EntryType} from '../../entry';
import type {Condition} from '../../condition';
import type {SelectGroupByStep} from './select-group-by-step';
import type {Field} from '../../field';

/**
 * `WHERE condition` step of a `WHERE` clause.
 *
 * This type allows chaining {@link SelectWhereStep#where} calls.
 */
type SelectWhereStep<Entry extends EntryType> = (SelectGroupByStep<Entry> & {
  where(condition: Condition): SelectWhereStep<Entry>
  where(condition: Field<boolean | null>): SelectWhereStep<Entry>
});

export type {
  SelectWhereStep
};
