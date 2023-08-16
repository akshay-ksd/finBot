import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import Settings from '../screens/settings/Settings';
import Monthly from '../screens/monthly/Monthly';
import Yearly from '../screens/yearly/Yearly';
import { color } from '../constants/theme/color';
import { font } from '../constants/theme/font';
const Tab = createMaterialTopTabNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarIndicatorStyle: { backgroundColor: color.secondary }, tabBarLabelStyle: { fontFamily: font.nova, fontSize: 14, fontWeight: "400" } }}>
            <Tab.Screen name="Day" component={HomeScreen} />
            <Tab.Screen name='Monthly' component={Monthly} />
            <Tab.Screen name='Yearly' component={Yearly} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

export default TabScreen