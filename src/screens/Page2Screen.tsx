import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, View, Button} from 'react-native';
import {styles} from '../themes/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Page2Screen = () => {
  //Any to avoid typescript error in navigate fn
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      //IOS
      headerBackTitle: 'Atras',
      //Andriod
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => navigation.goBack()}>
      //     <Text style={{ marginLeft: 8 }}>Regresar</Text>
      //   </TouchableOpacity>
      // ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.largeButton,
            backgroundColor: '#5856d6',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.largeButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.largeButton,
            backgroundColor: '#ff9427',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.largeButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page2Screen;
