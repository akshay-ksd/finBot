import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {color} from '../../../../constants/theme/color';

const BalanceBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Income : ₹200</Text>
        <Text style={styles.text}>Expense :₹200</Text>
      </View>
      <View style={[styles.box,{justifyContent:"center"}]}>
        <Text style={styles.text}>Balance : ₹200</Text>
      </View>
    </View>
  );
};

export default BalanceBox;
