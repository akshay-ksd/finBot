import {View, Text} from 'react-native';
import React, { useCallback, useRef } from 'react';
import YearPicker from '../../component/molecules/yearPicker/YearPicker';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import TransactionList from './organizer/TransactionList/TransactionList';


interface Schema {
  invoiceDate: Date;
  refNumber: string;
  entryType: string;
  text: string;
  description: string;
  symbol: string;
  amount: number;
}
const Yearly = () => {
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
      <YearPicker loadData={loadData}/>
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

export default Yearly;
