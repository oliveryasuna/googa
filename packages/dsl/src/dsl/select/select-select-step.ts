import type {SelectDistinctOnStep} from './select-distinct-on-step';

type SelectSelectStep = (SelectDistinctOnStep & {
  // TODO: select.
  select(): SelectSelectStep
});

export type {
  SelectSelectStep
};
