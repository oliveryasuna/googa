import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentStep} from './select-limit-percent-step';
import type {SelectLimitAfterOffsetStep} from './select-limit-after-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitStep<Entry extends EntryType> = (SelectForUpdateStep<Entry> & {
  // TODO: limit.
  limit(): SelectLimitPercentStep<Entry>,

  // TODO: offset.
  offset(): SelectLimitAfterOffsetStep<Entry>
});

export type {
  SelectLimitStep
};
