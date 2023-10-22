import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentStep} from './select-limit-percent-step';
import type {SelectLimitAfterOffsetStep} from './select-limit-after-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitStep<Record extends EntryType> = (SelectForUpdateStep<Record> & {
  // TODO: limit.
  limit(): SelectLimitPercentStep<Record>,

  // TODO: offset.
  offset(): SelectLimitAfterOffsetStep<Record>
});

export type {
  SelectLimitStep
};
