import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import DatePicker from '../../component/molecules/datePicker/DatePicker';
import Strip from './molecules/strip/Strip';
import SingleRender from './molecules/single_render/SingleRender';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <DatePicker />
      <Strip title={'Total Income (Credit)'} value={200} />
      <SingleRender />
      <SingleRender />
      <SingleRender />
      <Strip title={'Total Expence (Debit)'} value={200} />
    </View>
  );
};

export default HomeScreen;
