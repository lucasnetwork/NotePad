import React, { useState } from 'react';
import Header from '../../components/Header';
import {
  TextArea,
  InputTitle,
  Container,
  ButtonText,
  ButtonSave,
} from '../../styles/Inputs';

const Home = ({ navigation, posts, setPosts }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  function handlePost() {
    if (content.trim() !== '') {
      setPosts([...posts, { title, content }]);
    }
    setContent('');
    setTitle('');

    navigation.navigate('Posts');
  }
  return (
    <Container>
      <Header
        title="Bloco de Notas"
        navigation={navigation}
        page="Posts"
        type="go"
      />
      <InputTitle
        value={title}
        onChangeText={(e) => setTitle(e)}
        multiline
        placeholder="Titulo"
      />
      <TextArea
        value={content}
        onChangeText={(e) => setContent(e)}
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
