import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const NextButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextButton} activeOpacity={0.7}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NextButton