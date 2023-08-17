import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import MessageList from './template/message_list/MessageList';
import Footer from './molecules/footer/Footer';
import NextButton from './molecules/nextButton';

const Message = () => {
  const [showButton,setShowButton] = useState<boolean>(false)

  const setButtonStatus =(values:boolean)=>{
    setShowButton(values)
  }

  
  return (
    <View style={styles.container}>
      <Footer/>
      <MessageList setButtonStatus={setButtonStatus}/>
      {
        showButton && (
          <NextButton/>
        )
      }
    </View>
  )
}

export default Message