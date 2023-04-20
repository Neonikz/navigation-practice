import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../themes/appTheme';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const SideMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Options  */}
      <View style={styles.menuContainter}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuButton}>
          <Text style={styles.menuItem}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}>
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
