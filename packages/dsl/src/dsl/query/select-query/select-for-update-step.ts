import type {SelectForStep} from './select-for-step';
import type {SelectForUpdateOfStep} from './select-for-update-of-step';
import type {SelectFinalStep} from './select-final-step';
import type {Entry as EntryType} from '../../entry';

type SelectForUpdateStep<Entry extends EntryType> = (SelectForStep<Entry> & {
  // TODO: forUpdate.
  forUpdate(): SelectForUpdateOfStep<Entry>,

  // TODO: forNoKeyUpdate.
  forNoKeyUpdate(): SelectForUpdateOfStep<Entry>,

  // TODO: forShare.
  forShare(): SelectForUpdateOfStep<Entry>,

  // TODO: forKeyShare.
  forKeyShare(): SelectForUpdateOfStep<Entry>,

  // TODO: withCheckOption.
  withCheckOption(): SelectFinalStep<Entry>,

  // TODO: withReadOnly.
  withReadOnly(): SelectFinalStep<Entry>
});

export type {
  SelectForUpdateStep
};
