import type {SelectForStep} from './select-for-step';
import type {SelectForUpdateOfStep} from './select-for-update-of-step';
import type {SelectFinalStep} from './select-final-step';
import type {Entry as EntryType} from '../../entry';

type SelectForUpdateStep<Record extends EntryType> = (SelectForStep<Record> & {
  // TODO: forUpdate.
  forUpdate(): SelectForUpdateOfStep<Record>,

  // TODO: forNoKeyUpdate.
  forNoKeyUpdate(): SelectForUpdateOfStep<Record>,

  // TODO: forShare.
  forShare(): SelectForUpdateOfStep<Record>,

  // TODO: forKeyShare.
  forKeyShare(): SelectForUpdateOfStep<Record>,

  // TODO: withCheckOption.
  withCheckOption(): SelectFinalStep<Record>,

  // TODO: withReadOnly.
  withReadOnly(): SelectFinalStep<Record>
});

export type {
  SelectForUpdateStep
};
