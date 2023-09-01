import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
interface Transaction {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}

const SingleRender: FC<Transaction> = props => {
  const dateString = props?.item?.invoiceDate;
const dateObject = new Date(dateString);

// Get the time as a string (e.g., "09:21:29")
const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props?.item?.text}</Text>
        <Text style={[styles.title, {fontSize: 10, fontWeight: '100'}]}>
          {timeString}
        </Text>
      </View>
      <Text style={[styles.title, {textAlign: 'right'}]}>
        {props?.item?.amount}
      </Text>
    </View>
  );
};

export default SingleRender;
