import type {SelectForUpdateStep} from './select-for-update-step';
import type {Entry as EntryType} from '../../entry';

type SelectWithTiesAfterOffsetStep<Entry extends EntryType> = (SelectForUpdateStep<Entry> & {
  // TODO: withTies.
  withTies(): SelectForUpdateStep<Entry>
});

export type {
  SelectWithTiesAfterOffsetStep
};
