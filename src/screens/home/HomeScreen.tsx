import { View, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import styles from './style';
import * as Animatable from 'react-native-animatable'; // Import react-native-animatable

const DatePicker = React.lazy(
  () => import('../../component/molecules/datePicker/DatePicker')
);
const Strip = React.lazy(() => import('./molecules/strip/Strip'));
const TransactionList = React.lazy(
  () => import('./organizer/transactionList/TransactionList')
);
const InputModel = React.lazy(
  () => import('./organizer/inputModel/InputModel')
);

interface Schema {
  invoiceDate: Date;
  refNumber: string;
  entryType: string;
  text: string;
  description: string;
  symbol: string;
  amount: number;
}

const HomeScreen = () => {
  const [load, setLoad] = useState(true);
  const listRef = useRef<any>();
  const animatableRef = useRef<Animatable.View | null>(null); // Ref for Animatable.View
  const pickerRef = useRef()

  const loadData = (data: Schema[]) => {
    // Call the fadeIn animation on the Animatable.View component
    if (animatableRef.current) {
      animatableRef.current.fadeIn(1500); 
    }

    setTimeout(() => {
      listRef.current.loadData(data);
    }, 100);
  };

  const addNewData = (data: Schema) => {
    listRef.current.loadNewData(data);
    pickerRef.current.recalculateBalance()
  };

  return (
    <View style={styles.container}>
      <Suspense fallback={<ActivityIndicator />}>
        <DatePicker loadData={loadData} ref={pickerRef}/>
      </Suspense>
      <Suspense fallback={<ActivityIndicator />}>
        {/* Animatable.View component with ref */}
        <Animatable.View ref={animatableRef} animation="fadeIn" duration={500} delay={500}>
          <TransactionList ref={listRef} />
        </Animatable.View>
      </Suspense>
      <Suspense fallback={<ActivityIndicator />}>
        <InputModel addNewData={addNewData} />
      </Suspense>
    </View>
  );
};

export default HomeScreen;
