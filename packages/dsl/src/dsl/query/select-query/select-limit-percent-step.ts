import type {SelectWithTiesStep} from './select-with-ties-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitPercentStep<Record extends EntryType> = (SelectWithTiesStep<Record> & {
  percent(): SelectWithTiesStep<Record>
});

export type {
  SelectLimitPercentStep
};
