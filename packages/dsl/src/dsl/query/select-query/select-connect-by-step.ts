import type {Record as RecordType} from '../../record';
import type {SelectGroupByStep} from './select-group-by-step';

type SelectConnectByStep<Record extends RecordType> = (SelectGroupByStep<Record> & {});

export type {
  SelectConnectByStep
};
