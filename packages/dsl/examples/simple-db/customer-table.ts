import TableImpl from '../../src/database/impl/table-impl';
import type {DefaultCatalog} from './default-catalog';
import {PublicSchema} from './public-schema';
import {ColumnImpl} from '../../src/database/impl/column-impl';
import {UniqueKeyImpl} from '../../src/database/impl/unique-key-impl';

class CustomerTable extends TableImpl<CustomerTable, DefaultCatalog, PublicSchema> {

  public static readonly CUSTOMER = new CustomerTable();

  public static readonly ID = new ColumnImpl('id', '', CustomerTable.CUSTOMER, 'serial');
  public static readonly NAME = new ColumnImpl('name', '', CustomerTable.CUSTOMER, 'text');
  public static readonly ADDRESS = new ColumnImpl('address', '', CustomerTable.CUSTOMER, 'text');

  public static readonly PK = new UniqueKeyImpl('customer_pk', '', CustomerTable.CUSTOMER, [CustomerTable.ID], true);

  public static readonly NAME_UK = new UniqueKeyImpl('customer_name_uk', '', CustomerTable.CUSTOMER, [CustomerTable.NAME], false);

  private constructor() {
    super(
        'customer',
        '',
        PublicSchema.PUBLIC,
        [CustomerTable.ID, CustomerTable.NAME, CustomerTable.ADDRESS],
        CustomerTable.PK,
        [CustomerTable.NAME_UK],
        []
    );
  }

}

export {
  CustomerTable
};
