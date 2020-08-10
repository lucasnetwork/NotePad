import styled from 'styled-components';

export default styled.View`
  width: 100%;
  height: 100px;
  flex-direction: ${(props) => (props.type === 'go' ? 'row-reverse' : 'row')};
  background-color: #457b9d;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 40px;
  color: #fff;
  text-align: center;
`;
