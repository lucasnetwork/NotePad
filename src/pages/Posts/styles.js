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
export const PostContainer = styled.View`
  flex-direction: row;
  border: 2px solid #999;
  border-radius: 10px;
  padding: 20px;
  height: 100px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-content: center;
  overflow: hidden;
`;

export const PostButton = styled.TouchableOpacity`
  /* border: 2px solid #999;
  border-radius: 10px; */
  flex: 1;
  /* padding: 20px; */
  height: 100px;
  /* margin-bottom: 10px; */
`;
export const ButtonDelete = styled.TouchableOpacity``;

export const PostText = styled.Text`
  color: ${(props) => (props.type === 'title' ? '#000' : '#999')};
  font-size: ${(props) => (props.type === 'title' ? '15px' : '10px')};
`;
