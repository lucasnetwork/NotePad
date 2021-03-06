import styled from 'styled-components';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight}px 0 0 0;
  background-color: #fff;
  border: 1px solid #000;
`;
export const TextArea = styled.TextInput`
  flex: 1;
  text-align-vertical: top;
  padding: 10px;
  font-size: 15px;
`;

export const InputTitle = styled.TextInput`
  height: auto;
  padding: 10px;
  text-align-vertical: top;
  font-size: 25px;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #457b9d;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
