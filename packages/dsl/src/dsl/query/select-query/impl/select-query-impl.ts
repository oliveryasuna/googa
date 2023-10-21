import type {SelectSelectStep} from '../select-select-step';
import type {Record as RecordType} from '../../../record';
import type {SelectOptionalOnStep} from '../select-optional-on-step';
import type {SelectOnConditionStep} from '../select-on-condition-step';
import type {SelectWhereConditionStep} from '../select-where-condition-step';
import type {SelectHavingConditionStep} from '../select-having-condition-step';
import type {SelectQualifyConditionStep} from '../select-qualify-condition-step';

class SelectQueryImpl<Record extends RecordType>
// TODO: Many more implements.
    implements SelectSelectStep<Record>,
        SelectOptionalOnStep<Record>,
        SelectOnConditionStep<Record>,
        SelectWhereConditionStep<Record>,
        SelectHavingConditionStep<Record>,
        SelectQualifyConditionStep<Record> {


}

export {
  SelectQueryImpl
};
