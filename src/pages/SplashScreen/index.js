import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        console.log(res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('Login');
        }
      });
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Logo />
      <View style={{height: 25}} />
      <Text style={{fontSize: 32, fontFamily: 'Poppins-Medium'}}>RadSpot</Text>
    </View>
  );
};

export default SplashScreen;
