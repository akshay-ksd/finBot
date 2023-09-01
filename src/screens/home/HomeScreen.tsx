import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './style';
import DatePicker from '../../component/molecules/datePicker/DatePicker';
import Strip from './molecules/strip/Strip';
import TransactionList from './organizer/transactionList/TransactionList';
interface Schema {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}
const HomeScreen = () => {
  const listRef = useRef<any>()
  const loadData =(data:Schema[])=>{
    listRef.current.loadData(data)
  }
  return (
    <View style={styles.container}>
      <DatePicker loadData={loadData}/>
      <TransactionList ref={listRef}/>
    </View>
  );
};

export default HomeScreen;
