import type {SelectWindowStep} from './select-window-step';
import type {Entry as EntryType} from '../../entry';

type SelectHavingConditionStep<Entry extends EntryType> = (SelectWindowStep<Entry> & {
  // TODO: and.
  and(): SelectHavingConditionStep<Entry>,

  // TODO: andNot.
  andNot(): SelectHavingConditionStep<Entry>,

  // TODO: andExists.
  andExists(): SelectHavingConditionStep<Entry>,

  // TODO: andNotExists.
  andNotExists(): SelectHavingConditionStep<Entry>,

  // TODO: or.
  or(): SelectHavingConditionStep<Entry>,

  // TODO: orNot.
  orNot(): SelectHavingConditionStep<Entry>,

  // TODO: orExists.
  orExists(): SelectHavingConditionStep<Entry>,

  // TODO: orNotExists.
  orNotExists(): SelectHavingConditionStep<Entry>
});

export type {
  SelectHavingConditionStep
};
