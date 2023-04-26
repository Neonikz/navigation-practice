import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarColor: '#fff',
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
              break;
          }
          return <Icon name={iconName} size={20} color={color} />
        },

      })}
      inactiveColor="#FFF"
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{ title: 'Tab1' }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2' }}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}




const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'Tab2Screen':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'ST'
              break;
          }


          return <Text style={{ color }}>{iconName}</Text>
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2' }}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
