import { View, Text, FlatList } from 'react-native'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styles from './Style'
import useGetAllMessage from '../../../../functions/get_message/GetMessage'
import SingleRender from '../../molecules/message_single_render/SingleRender'
import { MMKV } from 'react-native-mmkv'
interface Item {
  isSelected: boolean;
  // Other properties of your object
}
interface ChildBProps {
  isNextCheck: (data: Item[]) => void;
}

const MessageList:FC<ChildBProps> = ({isNextCheck}) => {
  const storage = new MMKV()
  const message = useGetAllMessage()
  
  const [messageList,setMessageLis] = useState<any>([])

  const startIndex = useRef<number>(0);
  const endIndex = useRef<number>(50);

  useEffect(()=>{
    if(message){
      loadData()
    }
  },[message])

  const loadData =()=>{
    const newData = message?.msg.slice(startIndex.current, endIndex.current).map((item:any) => {
      return { ...item, isSelected: false };
    });
    startIndex.current = endIndex.current;
    endIndex.current += 50;
    setMessageLis((prev:any) => [...prev, ...newData]);
  }

  const selectMessage = useCallback((address:string)=>{
    const newData = Object.assign([],messageList);

    const index = newData.findIndex((x:any)=>x.address === address)
    newData[index].isSelected = !newData[index]?.isSelected
    setMessageLis(newData)
    isNextCheck(newData)
  },[messageList])

  const itemRender =(item:any)=>{
    return(
      <SingleRender item={item} selectMessage={selectMessage}/>
    )
  }

  const onEndReached =()=>{
    loadData()
  }
  return (
    <View style={styles.container}>
      {
        message && (
          <FlatList data={messageList}
                    renderItem={itemRender}
                    keyExtractor={(_,index)=>index.toString()}
                    onEndReached={onEndReached}/>
        )
      }
    </View>
  )
}

export default MessageList