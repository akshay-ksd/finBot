import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import styles from './style'
import MessageList from './template/message_list/MessageList';
import Footer from './molecules/footer/Footer';
import NextButton from './molecules/nextButton/NextButton';
interface Item {
  isSelected: boolean;
  // Other properties of your object
}
const Message = () => {
  const [next,setNext] = useState<Boolean>(false)

  const isNextCheck = useCallback((data: Item[]) => {
    const isSelected = data.filter((x) => x.isSelected);
    setNext(isSelected.length?true:false)
  }, []);
  return (
    <View style={styles.container}>
      <Footer/>
      <MessageList isNextCheck={isNextCheck}/>
      {next && (<NextButton/>)}
    </View>
  )
}

export default Message