import type {SelectForUpdateStep} from './select-for-update-step';
import type {Entry as EntryType} from '../../entry';

type SelectOffsetStep<Record extends EntryType> = (SelectForUpdateStep<Record> & {
  offset(offset: number): SelectForUpdateStep<Record>
});

export type {
  SelectOffsetStep
};
