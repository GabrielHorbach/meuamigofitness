import styled from 'styled-components';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background: ${props => (props.mode === 'light' ? '#fff' : '#50d890')};
`;

export const Card = styled.View`
  height: auto;
  background-color: ${props => props.background};
  border-radius: 10;
  padding: 15px;
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  ${props => props.autoSize && 'alignSelf: flex-start'}
`;

export const Container = styled.View`
  flex: 1;
  padding: 25px;
  background: ${props => (props.mode === 'light' ? '#fff' : '#50d890')};
`;

export const Separator = styled.View`
  width: 90%;
  height: 2;
  background: #f4f4f4;
  margin: 0 auto;
  margin-top: 20;
  margin-bottom: 20;
`;
