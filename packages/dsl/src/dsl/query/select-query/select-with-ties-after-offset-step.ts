import type {SelectForUpdateStep} from './select-for-update-step';
import type {Entry as EntryType} from '../../entry';

type SelectWithTiesAfterOffsetStep<Record extends EntryType> = (SelectForUpdateStep<Record> & {
  // TODO: withTies.
  withTies(): SelectForUpdateStep<Record>
});

export type {
  SelectWithTiesAfterOffsetStep
};
