import React, { useState } from 'react';
import { TextContainer } from './styles';
import Header from '../../components/Header';
import {
  InputTitle,
  TextArea,
  Container,
  ButtonText,
  ButtonSave,
} from '../../styles/Inputs';

const Details = ({ route, navigation, setPosts, posts }) => {
  const [post, setPost] = useState(route.params.post);
  const { position } = route.params;
  function handlePost() {
    const newPosts = posts.map((article, id) => {
      if (id === position) {
        return post;
      }
      return article;
    });
    setPosts(newPosts);
    setPost('');
    navigation.navigate('Posts');
  }
  return (
    <Container>
      <Header title="Detalhes" />
      <TextContainer>
        <InputTitle
          value={post.title}
          onChangeText={(e) => setPost({ ...post, title: e })}
        />
        <TextArea
          onChangeText={(e) => setPost({ ...post, content: e })}
          multiline
          value={post.content}
          placeholder="escreva"
        />
      </TextContainer>
      <ButtonSave onPress={handlePost}>
        <ButtonText>salvar</ButtonText>
      </ButtonSave>
    </Container>
  );
};

export default Details;
