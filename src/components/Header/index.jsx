import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';
import Container, { Title } from './styles';

const Header = ({ title, navigation, page, type }) => {
  function handleClick() {
    navigation.navigate(page);
  }
  return (
    <Container type={type}>
      <Icon
        name={`${type == 'go' ? 'arrowright' : 'arrowleft'}`}
        size={40}
        color="#fff"
        onPress={handleClick}
      />
      <View
        style={{ justifyContent: 'space-around', flex: 1, marginRight: 40 }}
      >
        <Title>{title}</Title>
      </View>
    </Container>
  );
};

export default Header;
