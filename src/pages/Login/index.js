import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <Logo />
        <Text style={{ fontSize: 32, fontFamily: 'Poppins-Medium', marginTop: 8 }}>RadSpot</Text>
        <Text style={{ fontSize: 17, fontFamily: 'Poppins-Reguler', color: '#7B7E83' }}>User Hotspot Management With Radius</Text>
      </View>
      <View style={styles.container}>
        <TextInput label="Username" placeholder="Username" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Password" />
        <Gap height={24} />
        <Button text="Login" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', backgroundColor: 'white'},
  logo: {justifyContent: 'center', alignItems: 'center'},
  container: {
    paddingHorizontal: 50,
    paddingVertical: 50,
    marginTop: 0,
    //   flex: 1,
  },
});
