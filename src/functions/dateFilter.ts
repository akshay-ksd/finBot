interface Schema {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}
const filterByDay =(data:Schema[],date:number,month:number,year:number)=>{
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

export {filterByDay}