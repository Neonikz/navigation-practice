import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
// import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends StackScreenProps<any, any> {}
// interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
  //     ),
  //   });
  // }, []);

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
