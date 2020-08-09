import styled from 'styled-components';
import Constants from 'expo-constants';

export default styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight}px 0 0 0;
  background-color: #fff;
`;

export const PostsContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const PostButton = styled.TouchableOpacity`
  border: 2px solid #999;
  border-radius: 10px;
  padding: 20px;
  height: 100px;
  margin-bottom: 10px;
`;

export const PostText = styled.Text`
  font-size: 15px;
`;
