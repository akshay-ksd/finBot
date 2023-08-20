import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
interface Transaction {
  bank: string | null;
  amount: number | null;
  time: string;
  type: 'credited' | 'debited';
}

const SingleRender: FC<Transaction> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>Tea</Text>
        <Text style={[styles.title, {fontSize: 10, fontWeight: '100'}]}>
          {props?.item?.time}
        </Text>
      </View>
      <Text style={[styles.title, {textAlign: 'right'}]}>
        {props?.item?.amount}
      </Text>
    </View>
  );
};

export default SingleRender;
