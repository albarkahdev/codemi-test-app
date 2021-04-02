import LoginScreen from '../screens/auth/login';
import React from 'react';
import {animationSlide} from './animation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: animationSlide,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};
