import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import Settings from '../screens/settings/Settings';
import Monthly from '../screens/monthly/Monthly';
import Yearly from '../screens/yearly/Yearly';
import { color } from '../constants/theme/color';
import { font } from '../constants/theme/font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Day') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          } else if (route.name === 'Monthly') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          } else if (route.name === 'Yearly') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: color.primary,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontFamily: font.nova,
          fontSize: 12,
          fontWeight: '400',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Day" component={HomeScreen} />
      <Tab.Screen name="Monthly" component={Monthly} />
      <Tab.Screen name="Yearly" component={Yearly} />
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
};
export default TabScreen;
