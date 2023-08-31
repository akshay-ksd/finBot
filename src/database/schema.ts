import Realm from 'realm';
class Invoice extends Realm.Object {
    public static schema: Realm.ObjectSchema = {
      name: 'incomeExpense',
      primaryKey: 'refNumber', // Specify a primary key for the Invoice model
      properties: {
        invoiceDate: 'date',
        refNumber: 'string',
        entryType: 'string',
        text: 'string',
        description: 'string',
        symbol: { type: 'string', default: "" },
        amount: { type: 'float', default: 0 },
      },
    };
  }
  
  export { Invoice };