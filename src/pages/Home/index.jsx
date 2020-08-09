import React from 'react';
import Container, { TextArea, ButtonSave, ButtonText } from './styles';
import Header from '../../components/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <TextArea multiline placeholder="escreva" />
      <ButtonSave>
        <ButtonText>salvar</ButtonText>
      </ButtonSave>
    </Container>
  );
};

export default Home;
