import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Login, Home, Users, Groups, SplashScreen, AddUser, Nas } from '../pages';
import { ButtomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Users" component={Users} />
            <Tab.Screen name="Add User" component={AddUser} />
            <Tab.Screen name="Groups" component={Groups} />
            <Tab.Screen name="Nas" component={Nas} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="SplashSchreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
    </Stack.Navigator>
    )

}

export default Router;