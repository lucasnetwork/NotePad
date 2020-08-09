import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Stack = createStackNavigator();

const Routes = () => {
  const [posts, setPosts] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" options={{ title: 'Overview' }}>
          {(props) => <Home {...props} posts={posts} setPosts={setPosts} />}
        </Stack.Screen>
        <Stack.Screen name="Posts">
          {(props) => <Posts {...props} posts={posts} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
