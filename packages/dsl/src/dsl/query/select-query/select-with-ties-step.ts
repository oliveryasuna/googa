import type {SelectOffsetStep} from './select-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectWithTiesStep<Entry extends EntryType> = (SelectOffsetStep<Entry> & {
  withTies(): SelectOffsetStep<Entry>
});

export type {
  SelectWithTiesStep
};
