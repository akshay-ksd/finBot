import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import DatePicker from '../../component/molecules/datePicker/DatePicker';
import Strip from './molecules/strip/Strip';
import TransactionList from './organizer/transactionList/TransactionList';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <DatePicker />
      <TransactionList />
      {/* <Strip title={'Total Expence (Debit)'} value={200} /> */}
    </View>
  );
};

export default HomeScreen;
