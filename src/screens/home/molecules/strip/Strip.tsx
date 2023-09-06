import { View, Text, Animated } from 'react-native';
import React, { FC, useEffect, useRef } from 'react';
import styles from './Style';

interface childProps {
  title: String;
  value: number;
  index: number; // Add index to props
}

const Strip: FC<childProps> = ({ title, value, index }) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   // Use setTimeout to start each animation with a delay based on the item's index
  //   const animationDelay = index * 10; // Adjust the delay duration as needed

  //   setTimeout(() => {
  //     Animated.timing(slideAnim, {
  //       toValue: 1,
  //       duration: 500, // Adjust the duration as needed
  //       useNativeDriver: true,
  //     }).start();
  //   }, animationDelay);
  // }, [slideAnim, index]);

  const slideInStyle = {
    transform: [
      {
        translateX: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0], // Slide in from the right
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>₹{value.toFixed(2)}</Text>
      </View>
    </Animated.View>
  );
};

export default Strip;
