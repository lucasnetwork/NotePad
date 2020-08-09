import React from 'react';
import Container, { PostsContainer, PostButton, PostText } from './styles';
import Header from '../../components/Header';

const Posts = ({ posts, navigation }) => {
  return (
    <Container>
      <Header title="Posts" />
      <PostsContainer>
        {posts.map((post, id) => (
          <PostButton
            onPress={() =>
              navigation.navigate('Details', { post, position: id })
            }
            key={id}
          >
            <PostText type="title">{post.title}</PostText>
            <PostText>{post.content}</PostText>
          </PostButton>
        ))}
      </PostsContainer>
    </Container>
  );
};

export default Posts;
