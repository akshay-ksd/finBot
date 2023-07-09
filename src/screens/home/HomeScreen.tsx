import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = () => {
  return (
    <View>
        <Icon name="rocket" size={30} color="#900" />
      <Text style={{fontFamily:"Proxima Nova Font",fontWeight:"900"}}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen