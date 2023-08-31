const today = new Date();
const filteredData = data.filter((item) => {
  const itemDate = new Date(item.invoiceDate);
  return (
    itemDate.getDate() === today.getDate() &&
    itemDate.getMonth() === today.getMonth() &&
    itemDate.getFullYear() === today.getFullYear()
  );
});