import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './Style';

interface childProps {
  title: String;
  value: number;
}

const Strip: FC<childProps> = ({title, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.title, {fontWeight: '100', fontSize: 14}]}>
          {value.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default Strip;
