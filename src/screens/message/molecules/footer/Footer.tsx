import { View, Text, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import styles from './style';

const Footer = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Text style={styles.title}>
        Please select only one of your bank messages for tracking credit and debit transactions.
      </Text>
      <Text style={styles.subTitle}>
        Rest assured that only the selected messages will be read and stored for future reference.
        We do not use or store your messages on our database.
      </Text>
    </Animated.View>
  );
};

export default Footer;
