import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import MonthPicker from '../../component/molecules/monthPicker/MonthPicker';
import styles from './style';
import TransactionList from './organizer/transactionList/TransactionList';
import * as Animatable from 'react-native-animatable';

const Monthly = () => {
  const listRef = useRef();
  const animatableRef = useRef<Animatable.View | null>(null); // Ref for Animatable.View


  const loadData = (data: any) => {
    if (animatableRef.current) {
      // animatableRef.current.fadeIn(1000); 
    }
    listRef.current.loadData(data);
  };
  return (
    <View style={styles.container}>
      <MonthPicker loadData={loadData} />
      {/* <BalanceBox/> */}
      <Animatable.View
        ref={animatableRef}
        animation="fadeIn"
        duration={500}
        delay={500}>
        <TransactionList ref={listRef} />
      </Animatable.View>
    </View>
  );
};

export default Monthly;
