import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './TabScreen';
import Message from '../screens/message/Message';

const StackNavigatorScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='TabScreen'>
            <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Message' component={Message} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigatorScreen