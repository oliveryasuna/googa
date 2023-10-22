import type {SelectWithTiesAfterOffsetStep} from './select-with-ties-after-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitPercentAfterOffsetStep<Entry extends EntryType> = (SelectWithTiesAfterOffsetStep<Entry> & {
  percent(): SelectWithTiesAfterOffsetStep<Entry>
});

export type {
  SelectLimitPercentAfterOffsetStep
};
