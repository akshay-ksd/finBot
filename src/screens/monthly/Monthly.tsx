import {View, Text} from 'react-native';
import React from 'react';
import MonthPicker from '../../component/molecules/monthPicker/MonthPicker';
import styles from './style';
import TransactionList from './organizer/transactionList/TransactionList';
import BalanceBox from './molecules/balanceBox/BalanceBox';
const Monthly = () => {
  return (
    <View style={styles.container}>
      <MonthPicker/>
      <BalanceBox/>
      <TransactionList/>
    </View>
  );
};

export default Monthly;
