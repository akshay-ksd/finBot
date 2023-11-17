import {View, Text} from 'react-native';
import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './style';
import SubRender from '../subRender/SubRender';
import {color} from '../../../../constants/theme/color'; 
import Ripple from "react-native-material-ripple";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

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
  const navigation = useNavigation()
  const animatableRef = useRef()

  useEffect(()=>{
    animatableRef.current.fadeInUp(500)
  },[])

  const goToDayScreen =()=>{
    global.selectedYear = data[0].invoiceDate
    navigation.navigate("Monthly")
  }
  return (
    <Animatable.View
      style={styles.container}
      ref={animatableRef}
      animation="fadeIn"
      duration={500}
      delay={500}>
      <Ripple style={styles.box} onPress={goToDayScreen}>
        <View style={styles.header}>
          <Text style={styles.dateText}>
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
                {marginTop: 10, color:calculateIncomeAndExpense(data).totalIncome > 0? color.secondary:color.grey, fontWeight: '700'},
              ]}>
              ₹{calculateIncomeAndExpense(data).totalIncome.toFixed(2)}
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.title}>Total Expense</Text>
            <Text
              style={[
                styles.title,
                {marginTop: 10, color:calculateIncomeAndExpense(data).totalExpense > 0?"red": color.greyText, fontWeight: '700'},
              ]}>
              ₹{calculateIncomeAndExpense(data).totalExpense.toFixed(2)}
            </Text>
          </View>
        </View>
      </Ripple>
    </Animatable.View>
  );
};

export default SingleRender;
