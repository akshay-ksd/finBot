import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './style';
import * as Animatable from 'react-native-animatable'; // Import react-native-animatable
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../constants/theme/color';
import {getAllInvoices} from '../../../database/relemInstense';
import {filterByYear} from '../../../functions/dateFilter';
import {useIsFocused} from '@react-navigation/native';
const YearPicker: FC<any> = props => {
  const [date, setDate] = useState<Date>(new Date()); // Initialize date state with the current date
  const [balance, setBalance] = useState<number>(0); // Initialize balance state
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  const isFocus = useIsFocused();
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

  useEffect(() => {
    if (isFocus) {
      getData();
    }
  }, [isFocus]);

  function calculateIncomeAndExpense(data: Schema[]): {
    totalIncome: number;
    totalExpense: number;
  } {
    let totalIncome = 0;
    let totalExpense = 0;

    for (const en of data) {
      for (const entry of en) {
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

  const getData = () => {
    const data: any[] = getAllInvoices();
    const filterData = filterByYear(data, date.getFullYear());
    props.loadData(filterData);
    const inData = calculateIncomeAndExpense(filterData);
    setIncome(inData?.totalIncome);
    setExpense(inData?.totalExpense)
  };

  const incrementDate = () => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + 1); // Use setFullYear to increment the year
    setDate(newDate);
    fade.current.zoomIn(500);
    const data: any[] = getAllInvoices();
    const filterData = filterByYear(data, newDate.getFullYear());
    const inData = calculateIncomeAndExpense(filterData);
    setIncome(inData?.totalIncome);
    setExpense(inData?.totalExpense)
    setTimeout(() => {
      props.loadData(filterData);
    }, 500);
  };

  // Function to decrement the date by 1 day
  const decrementDate = () => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() - 1); // Use setFullYear to decrement the year
    setDate(newDate);
    fade.current.zoomIn(500);
    const data: any[] = getAllInvoices();
    const filterData = filterByYear(data, newDate.getFullYear());
    const inData = calculateIncomeAndExpense(filterData);
    setIncome(inData?.totalIncome);
    setExpense(inData?.totalExpense)
    setTimeout(() => {
      props.loadData(filterData);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={decrementDate}>
          <Icon name="chevron-back-outline" color={'black'} size={23} />
        </TouchableOpacity>

        <View style={styles.dateDetails}>
          <Animatable.Text style={styles.title} ref={fade}>
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

export default YearPicker;
