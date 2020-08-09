import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
