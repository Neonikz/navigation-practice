import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button title="Ir a pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3Screen;
