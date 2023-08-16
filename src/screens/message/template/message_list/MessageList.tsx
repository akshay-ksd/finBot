import { View, Text, FlatList } from 'react-native'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styles from './Style'
import useGetAllMessage from '../../../../functions/get_message/GetMessage'
import SingleRender from '../../molecules/message_single_render/SingleRender'

interface messageProps {
  setButtonStatus: (values: any[]) => void
}
const MessageList:FC<messageProps> = () => {
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

  const selectMessage = useCallback((index:number)=>{
    const newData = Object.assign([],messageList);

    // const index = newData.findIndex((x:any)=>x.address === address)
    newData[index].isSelected = !newData[index]?.isSelected
    setMessageLis(newData)
  },[messageList])

  const itemRender =(item:any,index:number)=>{
    return(
      <SingleRender item={item} selectMessage={selectMessage} index={item?.index}/>
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