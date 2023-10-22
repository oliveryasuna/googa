import type {Entry as EntryType} from '../../entry';
import type {SelectWhereStep} from './select-where-step';
import type {TableLike} from '../../table-like';
import type {SelectOnStep} from './select-on-step';
import type {SelectJoinPartitionByStep} from './select-join-partition-by-step';

type SelectJoinStep<Record extends EntryType> = (SelectWhereStep<Record> & {
  join(table: TableLike<any>): SelectOnStep<Record>,
  innerJoin(table: TableLike<any>): SelectOnStep<Record>,
  crossJoin(table: TableLike<any>): SelectJoinStep<Record>,
  leftJoin(table: TableLike<any>): SelectJoinPartitionByStep<Record>,
  leftOuterJoin(table: TableLike<any>): SelectJoinPartitionByStep<Record>,
  rightJoin(table: TableLike<any>): SelectJoinPartitionByStep<Record>,
  rightOuterJoin(table: TableLike<any>): SelectJoinPartitionByStep<Record>,
  fullJoin(table: TableLike<any>): SelectOnStep<Record>,
  fullOuterJoin(table: TableLike<any>): SelectOnStep<Record>,
  naturalJoin(table: TableLike<any>): SelectJoinStep<Record>,
  naturalLeftOuterJoin(table: TableLike<any>): SelectJoinStep<Record>,
  naturalRightOuterJoin(table: TableLike<any>): SelectJoinStep<Record>,
  naturalFullOuterJoin(table: TableLike<any>): SelectJoinStep<Record>
});

export type {
  SelectJoinStep
};
