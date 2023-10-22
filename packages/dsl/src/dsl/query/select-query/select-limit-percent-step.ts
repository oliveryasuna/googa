import type {SelectWithTiesStep} from './select-with-ties-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitPercentStep<Entry extends EntryType> = (SelectWithTiesStep<Entry> & {
  percent(): SelectWithTiesStep<Entry>
});

export type {
  SelectLimitPercentStep
};
