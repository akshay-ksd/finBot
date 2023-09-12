import {View, Text} from 'react-native';
import React, { useRef } from 'react';
import MonthPicker from '../../component/molecules/monthPicker/MonthPicker';
import styles from './style';
import TransactionList from './organizer/transactionList/TransactionList';
import BalanceBox from './molecules/balanceBox/BalanceBox';

const Monthly = () => {
  const listRef = useRef()
  const loadData =(data:any)=>{
    listRef.current.loadData(data)
  }
  return (
    <View style={styles.container}>
      <MonthPicker loadData = {loadData}/>
      {/* <BalanceBox/> */}
      <TransactionList ref={listRef}/>
    </View>
  );
};

export default Monthly;
