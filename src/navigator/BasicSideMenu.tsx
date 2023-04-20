import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const BasicSideMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
