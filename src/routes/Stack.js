import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Details from '../pages/Details';

const Stack = createStackNavigator();

const Routes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@teste').then((res) => {
      if (res) {
        setPosts(JSON.parse(res));
      }
    });
  }, []);
  useEffect(() => {
    if (posts.length > 0) {
      const jsonPosts = JSON.stringify(posts);
      AsyncStorage.setItem('@teste', jsonPosts);
    }
  }, [posts]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" options={{ title: 'Overview' }}>
          {(props) => <Home {...props} posts={posts} setPosts={setPosts} />}
        </Stack.Screen>
        <Stack.Screen name="Posts">
          {(props) => <Posts {...props} setPosts={setPosts} posts={posts} />}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => <Details {...props} setPosts={setPosts} posts={posts} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
