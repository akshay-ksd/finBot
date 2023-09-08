import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import SingleRender from '../../molecules/singleRender/SingleRender'
const TransactionList = () => {
  return (
    <View style={styles.container}>
      <SingleRender/>
    </View>
  )
}

export default TransactionList