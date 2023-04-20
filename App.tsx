import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicSideMenu} from './src/navigator/BasicSideMenu';
import {SideMenu} from './src/navigator/SideMenu';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicSideMenu /> */}
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;
