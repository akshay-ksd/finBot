import {View, Text} from 'react-native';
import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import styles from './style';
import SubRender from '../subRender/SubRender';
import {color} from '../../../../constants/theme/color';
interface Schema {
  invoiceDate: Date;
  refNumber: string;
  entryType: string;
  text: string;
  description: string;
  symbol: string;
  amount: number;
}
interface Entry {
  amount: number;
  description: string;
  entryType: 'Income' | 'Expense';
  invoiceDate: string;
  refNumber: string;
  symbol: string;
  text: string;
}

function calculateIncomeAndExpense(data: Entry[]): {
  totalIncome: number;
  totalExpense: number;
} {
  let totalIncome = 0;
  let totalExpense = 0;

  for (const entry of data) {
    if (entry.entryType === 'Income') {
      totalIncome += entry.amount;
    } else if (entry.entryType === 'Expense') {
      totalExpense += entry.amount;
    }
  }

  return {
    totalIncome,
    totalExpense,
  };
}
const formatDay = (date: Date) => {
  return date.getDate().toString().padStart(2, '0');
};
const SingleRender: FC<any> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.dateText}>
            {formatDay(new Date(data[0].invoiceDate))}{' '}
            {new Date(data[0].invoiceDate).toLocaleString('default', {
              month: 'long',
            })}{' '}
            <Text style={[styles.title,{fontWeight:"100",fontSize:10}]}>{`  (Balance ₹${(calculateIncomeAndExpense(data).totalIncome-calculateIncomeAndExpense(data).totalExpense).toFixed(2)})`}</Text>
          </Text>
        </View>
        <View style={styles.transactionType}>
          <View style={styles.subView}>
            <Text style={styles.title}>{'Total Income'}</Text>
            <Text
              style={[
                styles.title,
                {marginTop: 10, color: color.secondary, fontWeight: '700'},
              ]}>
              ₹{calculateIncomeAndExpense(data).totalIncome.toFixed(2)}
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.title}>Total Expense</Text>
            <Text
              style={[
                styles.title,
                {marginTop: 10, color: color.greyText, fontWeight: '700'},
              ]}>
              ₹{calculateIncomeAndExpense(data).totalExpense.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleRender;
