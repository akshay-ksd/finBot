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
      // realm.close();
    }
};

const getAllInvoices = (): Invoice[] => {
  const realm = getRealmInstance();
  const allInvoices = realm.objects<Invoice>('incomeExpense');
  
  // Sort the invoices by invoiceDate in descending order
  const sortedInvoices = allInvoices.sorted('invoiceDate', true); // Use true for descending order
  
  // Convert the sorted Realm Results to an array
  const invoicesArray = Array.from(sortedInvoices);
  
  return invoicesArray;
};


export {saveInvoiceToRealm,getAllInvoices}