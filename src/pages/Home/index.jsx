import React, { useState } from 'react';
import Container, { TextArea, ButtonSave, ButtonText } from './styles';
import Header from '../../components/Header';

const Home = ({ navigation, posts, setPosts }) => {
  const [post, setPost] = useState('');

  function handlePost() {
    if (post.trim() !== '') {
      setPosts([...posts, post]);
    }
    setPost('');

    navigation.navigate('Posts');
  }
  return (
    <Container>
      <Header title="Bloco de Notas" />
      <TextArea
        value={post}
        onChangeText={(e) => setPost(e)}
        multiline
        placeholder="escreva"
      />
      <ButtonSave onPress={handlePost}>
        <ButtonText>salvar</ButtonText>
      </ButtonSave>
    </Container>
  );
};

export default Home;
