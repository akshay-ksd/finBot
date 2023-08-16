import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import MessageList from './template/message_list/MessageList';
import Footer from './molecules/footer/Footer';

const Message = () => {
  return (
    <View style={styles.container}>
      <MessageList/>
      <Footer/>
    </View>
  )
}

export default Message