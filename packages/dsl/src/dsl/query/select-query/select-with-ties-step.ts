import type {SelectOffsetStep} from './select-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectWithTiesStep<Record extends EntryType> = (SelectOffsetStep<Record> & {
  withTies(): SelectOffsetStep<Record>
});

export type {
  SelectWithTiesStep
};
