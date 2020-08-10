import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = ({ navigate, posts }) => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen />
      </Navigator>
    </NavigationContainer>
  );
};
