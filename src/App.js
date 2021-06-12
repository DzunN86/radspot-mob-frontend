import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import { Login, SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};


export default App;
