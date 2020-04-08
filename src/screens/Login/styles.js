import styled from 'styled-components';
import { Dimensions, KeyboardAvoidingView } from 'react-native';

const width = Dimensions.get('window').width;

export const Title = styled.Text`
  font-size: ${width / 12};
  font-weight: bold;
  color: #50d890;
  margin-bottom: 50;
`;

export const Input = styled.TextInput`
  padding-left: 4%;
  padding-right: 4%;
  height: 8%;
  background-color: #f9f9f9;
  width: 85%;
  border-radius: 5px;
  margin-bottom: 2%;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 6%;
  background-color: #50d890;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 40;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
