import styled from 'styled-components';
import Constants from 'expo-constants';

export default styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight}px 0 0 0;
  background-color: #fff;
`;

export const TextContainer = styled.View`
  flex: 1;
  padding: 10px;
`;
