interface Schema {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}
const filterByDay =(data:Schema[],date:number,month:number,year:number):Schema[]=>{
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.invoiceDate);
    return (
      itemDate.getDate() === date &&
      itemDate.getMonth() === month &&
      itemDate.getFullYear() === year
    );
  });
  return filteredData;
}

const filterByMonth =(data:Schema[],month:number,year:number):Schema[]=>{
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.invoiceDate);
    return (
      itemDate.getMonth() === month &&
      itemDate.getFullYear() === year
    );
  });

  const orderedAndGroupedData = filteredData.reduce((acc:any, obj:any) => {
    const d = new Date(obj.invoiceDate)

    const existingDateEntry:any = acc.find((entry:any) => new Date(entry[0]?.invoiceDate).getDate() === d.getDate());
    if (existingDateEntry) {
      existingDateEntry.push(obj);
    } else {
      acc.push([obj]);
    }
    return acc;
  }, []);
  return orderedAndGroupedData
}

const filterByYear =(data:Schema[],year:number):Schema[]=>{
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.invoiceDate);
    return (
      itemDate.getFullYear() === year
    );
  });
  const orderedAndGroupedData = filteredData.reduce((acc:any, obj:any) => {
    const d = new Date(obj.invoiceDate)

    const existingDateEntry:any = acc.find((entry:any) => new Date(entry[0]?.invoiceDate).getMonth() === d.getMonth());
    if (existingDateEntry) {
      existingDateEntry.push(obj);
    } else {
      acc.push([obj]);
    }
    return acc;
  }, []);
  return orderedAndGroupedData
}

export {filterByDay,filterByMonth,filterByYear}