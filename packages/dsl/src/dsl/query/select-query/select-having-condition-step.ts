import type {SelectWindowStep} from './select-window-step';
import type {Entry as EntryType} from '../../entry';

type SelectHavingConditionStep<Record extends EntryType> = (SelectWindowStep<Record> & {
  // TODO: and.
  and(): SelectHavingConditionStep<Record>,

  // TODO: andNot.
  andNot(): SelectHavingConditionStep<Record>,

  // TODO: andExists.
  andExists(): SelectHavingConditionStep<Record>,

  // TODO: andNotExists.
  andNotExists(): SelectHavingConditionStep<Record>,

  // TODO: or.
  or(): SelectHavingConditionStep<Record>,

  // TODO: orNot.
  orNot(): SelectHavingConditionStep<Record>,

  // TODO: orExists.
  orExists(): SelectHavingConditionStep<Record>,

  // TODO: orNotExists.
  orNotExists(): SelectHavingConditionStep<Record>
});

export type {
  SelectHavingConditionStep
};
