import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="desktop-outline" size={80} color={colors.primary} />
        <Icon name="cut-outline" size={80} color={colors.primary} />
        <Icon name="game-controller-outline" size={80} color={colors.primary} />
        <Icon name="heart-half-outline" size={80} color={colors.primary} />
        <Icon name="leaf-outline" size={80} color={colors.primary} />
        <Icon name="musical-notes-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
