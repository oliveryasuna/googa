import type {DslContext} from '../../src';
import {CustomerTable} from './database/tables/customer-table';

// @ts-expect-error: TS1155 because this is just an example.
const dsl: DslContext = {};

dsl
    .select(CustomerTable.NAME)
    .from(CustomerTable.CUSTOMER)
    .toSql();
