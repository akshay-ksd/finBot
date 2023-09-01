import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../constants/theme/color';
import { getAllInvoices } from '../../../database/relemInstense';
import { filterByDay } from '../../../functions/dateFilter';
interface Schema {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}
const DatePicker: React.FC<any> = (props) => {
  const [date, setDate] = useState<Date>(new Date()); // Initialize date state with the current date
  useEffect(()=>{
    const data = getAllInvoices();
    const filterData = filterByDay(data,date.getDate(),date.getMonth(),date.getFullYear());
    props.loadData(filterData)
    global.date = date
  },[date])

  // Function to increment the date by 1 day
  const incrementDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  };

  // Function to decrement the date by 1 day
  const decrementDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
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
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>{formatDay(date)}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>
              {date.toLocaleString('default', {month: 'long'})}{' '}
              {date.getFullYear()}
            </Text>
            <Text style={styles.subTitl}>
            {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.subTitl}>Balance</Text>
          <Text style={[styles.title, {fontSize: 12, color: color.primary}]}>
            20000
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={incrementDate}>
          <Icon name="chevron-forward-outline" color={'black'} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;
