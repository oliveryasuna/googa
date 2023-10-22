import type {SelectForUpdateStep} from './select-for-update-step';
import type {Entry as EntryType} from '../../entry';

type SelectOffsetStep<Entry extends EntryType> = (SelectForUpdateStep<Entry> & {
  offset(offset: number): SelectForUpdateStep<Entry>
});

export type {
  SelectOffsetStep
};
