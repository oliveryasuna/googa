import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentAfterOffsetStep} from './select-limit-percent-after-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitAfterOffsetStep<Entry extends EntryType> = (SelectForUpdateStep<Entry> & {
  // TODO: limit.
  limit(): SelectLimitPercentAfterOffsetStep<Entry>
});

export type {
  SelectLimitAfterOffsetStep
};
