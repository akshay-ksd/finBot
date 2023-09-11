import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './style';
import * as Animatable from 'react-native-animatable'; // Import react-native-animatable
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../constants/theme/color';
import { getAllInvoices } from '../../../database/relemInstense';
import { filterByMonth } from '../../../functions/dateFilter';

const MonthPicker: FC<any> = (props) => {
  const [date, setDate] = useState<Date>(new Date()); // Initialize date state with the current date
  const [balance, setBalance] = useState<number>(0); // Initialize balance state

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

  useEffect(()=>{
    getData()
  },[])

  const getData = ()=> {
    const data:any[] = getAllInvoices();
    const filterData = filterByMonth(
      data,
      date.getMonth(),
      date.getFullYear()
    );
    props.loadData(filterData)
  }

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

  // Function to format the day as "DD"
  const formatDay = (date: Date) => {
    return date.getDate().toString().padStart(2, '0');
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
        </View>
        <TouchableOpacity style={styles.button} onPress={incrementDate}>
          <Icon name="chevron-forward-outline" color={'black'} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MonthPicker;
