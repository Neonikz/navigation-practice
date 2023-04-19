import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};

export default Page1Screen;
