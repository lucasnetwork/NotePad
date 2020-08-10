import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View } from 'react-native';
import Container, {
  PostsContainer,
  PostButton,
  PostText,
  PostContainer,
  ButtonDelete,
} from './styles';
import Header from '../../components/Header';

const Posts = ({ posts, setPosts, navigation }) => {
  function deletePost(position) {
    const newPosts = posts.filter((post, id) => id !== position);

    setPosts(newPosts);
  }
  return (
    <Container>
      <Header title="Posts" navigation={navigation} page="Home" />
      <PostsContainer>
        {posts.map((post, id) => (
          <PostContainer key={id}>
            <PostButton
              onPress={() =>
                navigation.navigate('Details', { post, position: id })
              }
            >
              <PostText type="title">{post.title}</PostText>
              <PostText>{post.content}</PostText>
            </PostButton>
            <ButtonDelete onPress={() => deletePost(id)}>
              <Icon name="trash" color="red" size={30} />
            </ButtonDelete>
          </PostContainer>
        ))}
      </PostsContainer>
    </Container>
  );
};

export default Posts;
