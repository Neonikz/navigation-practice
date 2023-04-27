import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicSideMenu} from './src/navigator/BasicSideMenu';
import { SideMenu } from './src/navigator/SideMenu';
import { AuthProvider } from './src/context/AuthContext';
// import {Tabs} from './src/navigator/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      <AppContext>
        {/* <StackNavigator /> */}
        {/* <BasicSideMenu /> */}
        <SideMenu />
        {/* <Tabs /> */}
      </AppContext>
    </NavigationContainer>
  );
};

const AppContext = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
