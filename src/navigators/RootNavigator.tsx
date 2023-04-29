import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/index';
import {HomeScreen} from '../screens/HomeScreen/index';

const Stack = createNativeStackNavigator<RootStackParamList>();

const options = {
  headerShown: false,
  headerBackTitle: '',
  headerShadowVisible: false,
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
