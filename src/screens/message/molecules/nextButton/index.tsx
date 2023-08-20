import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const NextButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('TabScreen')}>
        <Text style={styles.nextButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
