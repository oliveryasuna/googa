import type {SelectDistinctOnStep} from './select-distinct-on-step';
import type {Record as RecordType} from '../../record';
import type {SelectField} from '../../field';

type SelectSelectStep<Record extends RecordType> = (SelectDistinctOnStep<Record> & {
  select(...fields: SelectField<any>[]): SelectSelectStep<RecordType>
});

export type {
  SelectSelectStep
};
