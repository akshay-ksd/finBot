import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './style';
import * as Animatable from 'react-native-animatable'; // Import react-native-animatable
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../constants/theme/color';
import { getAllInvoices } from '../../../database/relemInstense';
import { filterByMonth } from '../../../functions/dateFilter';
import { useIsFocused } from '@react-navigation/native';
const MonthPicker: FC<any> = (props) => {
  const [date, setDate] = useState<Date>(new Date()); // Initialize date state with the current date
  const [balance, setBalance] = useState<number>(0); // Initialize balance state
  const [income,setIncome] = useState<number>(0)
  const [expense,setExpense] = useState<number>(0)

  const isFocus = useIsFocused()
  const fade = useRef();
  interface Schema {
    invoiceDate: Date;
    refNumber: string;
    entryType: string;
    text: string;
    description: string;
    symbol: string;
    amount: number;
  }
  function calculateIncomeAndExpense(data: Schema[]): {
    totalIncome: number;
    totalExpense: number;
  } {
    let totalIncome = 0;
    let totalExpense = 0;

    for (const en of data) {
     for(const entry of en){
      if (entry.entryType === 'Income') {
        totalIncome += entry.amount;
      } else if (entry.entryType === 'Expense') {
        totalExpense += entry.amount;
      }
     }

      
    } 
  
    return {
      totalIncome,
      totalExpense,
    };
  }
  useEffect(()=>{
    if(isFocus){
      if(global.selectedYear){
        setDate(new Date(global.selectedYear))
        global.selectedYear = null
      }
    }
  },[isFocus])

  useEffect(()=>{
    const data:any[] = getAllInvoices();
    const filterData = filterByMonth(
      data,
      date.getMonth(),
      date.getFullYear()
    );

    props.loadData(filterData)
    const inData = calculateIncomeAndExpense(filterData);
    setIncome(inData?.totalIncome);
    setExpense(inData?.totalExpense)
  },[date])

  const incrementDate = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
    fade.current.zoomIn(500);
  };

  // Function to decrement the date by 1 day
  const decrementDate = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
    fade.current.zoomIn(500);
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={decrementDate}>
          <Icon name="chevron-back-outline" color={'black'} size={23} />
        </TouchableOpacity>

        <View style={styles.dateDetails}>
          <Animatable.Text style={styles.title} ref={fade}>
            {date.toLocaleString('default', {month: 'long'})}{' '}
            {date.getFullYear()}
          </Animatable.Text>
          <Text style={[styles?.incomeText,{marginTop:"2%"}]}>Balance ₹{(income-expense).toFixed(2)}</Text>
          <View style={styles.totalView}>
            <Text style={styles?.incomeText}>Income ₹{income.toFixed(2)}</Text>
            <Text style={styles?.incomeText}>Expense ₹{expense.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={incrementDate}>
          <Icon name="chevron-forward-outline" color={'black'} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MonthPicker;
