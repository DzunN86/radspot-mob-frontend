import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000)
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
