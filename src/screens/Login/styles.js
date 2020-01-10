import styled from 'styled-components';

export const Title = styled.Text`
  font-size: 42;
  font-weight: bold;
  color: #50d890;
  margin-bottom: 50;
`;

export const Input = styled.TextInput`
  padding: 15px;
  background-color: #f9f9f9;
  width: 85%;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 5%;
  background-color: #50d890;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
