
interface Schema {
    invoiceDate: Date,
    refNumber: string,
    entryType:string,
    text: string,
    description:string,
    symbol: string,
    amount: number,
  }
export  const calculateBalance = (data: Schema[]) => {
    let income = 0;
    let expense = 0;
  
    if (data?.length) {
      data.forEach((item) => {
        if (item.entryType === 'Income') {
          income += item?.amount;
        } else if (item.entryType === 'Expense') {
          expense += item?.amount;
        }
      });
    }
  
    // Calculate the balance as income - expense
    const balance = income - expense;
    return balance;
  };