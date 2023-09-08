import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.dateText}>3 September 2023</Text>
      <View style={styles.transactionType}>
        <View style={styles.subView}>
          <Text style={styles.title}>Income</Text>
        </View>
        <View style={styles.subView}>
          <Text style={styles.title}>Expense</Text>
        </View>
      </View>
    </View>
  );
};
const SingleRender = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Header />
      </View>
    </View>
  );
};

export default SingleRender;
