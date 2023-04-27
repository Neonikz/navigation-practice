import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="desktop-outline" />
        <TouchableIcon iconName="cut-outline" />
        <TouchableIcon iconName="game-controller-outline" />
        <TouchableIcon iconName="heart-half-outline" />
        <TouchableIcon iconName="leaf-outline" />
        <TouchableIcon iconName="musical-notes-outline" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
