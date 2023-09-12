import {View, Text, Animated} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import styles from './style';
import * as Animatable from "react-native-animatable"
interface obj {
  invoiceDate: Date;
  refNumber: string;
  entryType: string;
  text: string;
  description: string;
  symbol: string;
  amount: number;
}

interface Transaction {
  item: obj;
  index: number;
}

const SingleRender: FC<Transaction> = props => {
  const dateString = props?.item?.invoiceDate;
  const dateObject = new Date(dateString);
  const timeString = dateObject.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animateRef = useRef();
  // useEffect(() => {
  //   // Use setTimeout to start each animation with a delay based on the item's index
  //   const animationDelay = props.index * 50; // Adjust the delay duration as needed

  //   setTimeout(() => {
  //     Animated.timing(fadeAnim, {
  //       toValue: 1,
  //       duration: 1000, // Animation duration for each item
  //       useNativeDriver: true,
  //     }).start();
  //   }, animationDelay);
  // }, [fadeAnim, props.index]);

  useEffect(()=>{
    setTimeout(() => {
      // animateRef.current.fadeIn()
    }, 500);
  },[])

  return (
    <Animatable.View style={{...styles.container}} ref={animateRef}>
      <View style={styles.details}>
        <Text style={styles.title}>{props?.item?.text}</Text>
        <Text style={[styles.title, {fontSize: 10, fontWeight: '100'}]}>
          {timeString}
        </Text>
      </View>
      <Text style={[styles.title, {textAlign: 'right',fontWeight:"700"}]}>
        ₹{props?.item?.amount.toFixed(2)}
      </Text>
    </Animatable.View>
  );
};

export default SingleRender;
