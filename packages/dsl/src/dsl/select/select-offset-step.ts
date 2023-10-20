import type {SelectForUpdateStep} from './select-for-update-step';

type SelectOffsetStep = (SelectForUpdateStep & {
  // TODO: offset.
  offset(): SelectForUpdateStep
});

export type {
  SelectOffsetStep
};
