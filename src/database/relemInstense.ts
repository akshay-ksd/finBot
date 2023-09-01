import Realm from 'realm';
import { Invoice } from './schema';

interface Schema {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}

const getRealmInstance = (): Realm => {
    return new Realm({ schema: [Invoice] });
};

const saveInvoiceToRealm = (newInvoice: Schema) => {
    const realm = getRealmInstance();
    try {
      realm.write(() => {
        realm.create('incomeExpense', newInvoice);
      });
    } catch (error) {
      console.error('Error saving invoice to Realm:', error);
    } finally {
      realm.close();
    }
};

const getAllInvoices = (): Invoice[] => {
  const realm = getRealmInstance();
  const allInvoices = realm.objects<Invoice>('incomeExpense');
  const invoicesArray = Array.from(allInvoices);
  return invoicesArray;
};


export {saveInvoiceToRealm,getAllInvoices}