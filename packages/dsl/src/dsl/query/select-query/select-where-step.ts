import type {SelectWhereConditionStep} from './select-where-condition-step';
import type {Record as RecordType} from '../../record';
import type {SelectConnectByStep} from './select-connect-by-step';

type SelectWhereStep<Record extends RecordType> = (SelectConnectByStep<Record> & {
  // TODO: where.
  where(): SelectWhereConditionStep<Record>
});

export type {
  SelectWhereStep
};
