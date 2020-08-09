import React from 'react';
import Container, { PostsContainer, PostButton, PostText } from './styles';
import Header from '../../components/Header';

const Posts = ({ posts }) => (
  <Container>
    <Header title="Posts" />
    <PostsContainer>
      {posts.map((post, id) => (
        <PostButton key={id}>
          <PostText>{post}</PostText>
        </PostButton>
      ))}
    </PostsContainer>
  </Container>
);

export default Posts;
