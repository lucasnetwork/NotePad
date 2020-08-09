import React from 'react';
import { View, Text } from 'react-native';

const Posts = ({ posts }) => (
  <View>
    {posts.map((post, id) => (
      <Text key={id}>{post}</Text>
    ))}
  </View>
);

export default Posts;
