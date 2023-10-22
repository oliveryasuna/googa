import type {SelectForUpdateStep} from './select-for-update-step';
import type {SelectLimitPercentAfterOffsetStep} from './select-limit-percent-after-offset-step';
import type {Entry as EntryType} from '../../entry';

type SelectLimitAfterOffsetStep<Record extends EntryType> = (SelectForUpdateStep<Record> & {
  // TODO: limit.
  limit(): SelectLimitPercentAfterOffsetStep<Record>
});

export type {
  SelectLimitAfterOffsetStep
};
