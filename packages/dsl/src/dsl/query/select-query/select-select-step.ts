import type {SelectDistinctOnStep} from './select-distinct-on-step';
import type {Record as RecordType} from '../../record';
import type {SelectFieldOrAsterisk} from '../../field';

type SelectSelectStep<Record extends RecordType> = (SelectDistinctOnStep<Record> & {
  select(...fields: SelectFieldOrAsterisk[]): SelectSelectStep<RecordType>
});

export type {
  SelectSelectStep
};
