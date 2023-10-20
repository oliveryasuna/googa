import TableImpl from '../../src/database/impl/table-impl';
import type {DefaultCatalog} from './default-catalog';
import {PublicSchema} from './public-schema';
import {ColumnImpl} from '../../src/database/impl/column-impl';
import {UniqueKeyImpl} from '../../src/database/impl/unique-key-impl';
import {CustomerTable} from './customer-table';
import {ForeignKeyImpl} from '../../src/database/impl/foreign-key-impl';

class OrderTable extends TableImpl<OrderTable, DefaultCatalog, PublicSchema> {

  public static readonly ORDER = new OrderTable();

  public static readonly ID = new ColumnImpl('id', '', OrderTable.ORDER, 'serial');
  public static readonly CUSTOMER_ID = new ColumnImpl('customer_id', '', OrderTable.ORDER, 'integer');
  public static readonly DATE = new ColumnImpl('date', '', OrderTable.ORDER, 'timestamptz');
  public static readonly TOTAL = new ColumnImpl('total', '', OrderTable.ORDER, 'numeric');

  public static readonly PK = new UniqueKeyImpl('order_pk', '', OrderTable.ORDER, [OrderTable.ID], true);

  public static readonly CUSTOMER_ID_FK = new ForeignKeyImpl(
      'order_customer_id_fk',
      '',
      OrderTable.ORDER,
      CustomerTable.CUSTOMER,
      (new Map([[OrderTable.CUSTOMER_ID, CustomerTable.ID]])),
      'no action',
      'no action'
  );

  private constructor() {
    super(
        'order',
        '',
        PublicSchema.PUBLIC,
        [OrderTable.ID, OrderTable.CUSTOMER_ID, OrderTable.DATE, OrderTable.TOTAL],
        OrderTable.PK,
        [],
        [OrderTable.CUSTOMER_ID_FK]
    );
  }

}

export {
  OrderTable
};
