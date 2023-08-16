import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const NextButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.nextButton}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NextButton