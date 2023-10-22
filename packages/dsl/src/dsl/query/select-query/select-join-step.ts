import type {Entry as EntryType} from '../../entry';
import type {SelectWhereStep} from './select-where-step';
import type {TableLike} from '../../table-like';
import type {SelectOnStep} from './select-on-step';
import type {SelectJoinPartitionByStep} from './select-join-partition-by-step';

type SelectJoinStep<Entry extends EntryType> = (SelectWhereStep<Entry> & {
  join(table: TableLike<any>): SelectOnStep<Entry>,
  innerJoin(table: TableLike<any>): SelectOnStep<Entry>,
  crossJoin(table: TableLike<any>): SelectJoinStep<Entry>,
  leftJoin(table: TableLike<any>): SelectJoinPartitionByStep<Entry>,
  leftOuterJoin(table: TableLike<any>): SelectJoinPartitionByStep<Entry>,
  rightJoin(table: TableLike<any>): SelectJoinPartitionByStep<Entry>,
  rightOuterJoin(table: TableLike<any>): SelectJoinPartitionByStep<Entry>,
  fullJoin(table: TableLike<any>): SelectOnStep<Entry>,
  fullOuterJoin(table: TableLike<any>): SelectOnStep<Entry>,
  naturalJoin(table: TableLike<any>): SelectJoinStep<Entry>,
  naturalLeftOuterJoin(table: TableLike<any>): SelectJoinStep<Entry>,
  naturalRightOuterJoin(table: TableLike<any>): SelectJoinStep<Entry>,
  naturalFullOuterJoin(table: TableLike<any>): SelectJoinStep<Entry>
});

export type {
  SelectJoinStep
};
