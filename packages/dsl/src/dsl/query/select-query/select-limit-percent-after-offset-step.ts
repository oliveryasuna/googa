import type {SelectWithTiesAfterOffsetStep} from './select-with-ties-after-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitPercentAfterOffsetStep<Record extends EntryType> = (SelectWithTiesAfterOffsetStep<Record> & {
  percent(): SelectWithTiesAfterOffsetStep<Record>
});

export type {
  SelectLimitPercentAfterOffsetStep
};
