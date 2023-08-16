import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../constants/theme/color';

const DatePicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button}>
          <Icon name="chevron-back-outline" color={'black'} size={23} />
        </TouchableOpacity>
        <View style={styles.dateDetails}>
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>14</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>January 2023</Text>
            <Text style={styles.subTitl}>Monday</Text>
          </View>
        </View>

        <View>
          <Text style={styles.subTitl}>Balance</Text>
          <Text style={[styles.title, {fontSize: 12, color: color.primary}]}>
            20000
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon name="chevron-forward-outline" color={'black'} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;
