import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const SingleRender = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>Tea</Text>
        <Text style={[styles.title, {fontSize: 10, fontWeight: '100'}]}>
          UPI Transaction
        </Text>
      </View>
      <Text style={[styles.title, {textAlign: 'right'}]}>200</Text>
    </View>
  );
};

export default SingleRender;
