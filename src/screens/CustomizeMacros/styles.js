import styled from 'styled-components/native';
import { responsiveSize } from '../../utils/dimensions';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15%;
`;

export const Label = styled.Text`
  font-size: ${responsiveSize(20)};
  font-weight: bold;
  color: #50d890;
  width: 140;
  text-align: center;
  margin-bottom: 5;
`;

export const NumberInput = styled.TextInput`
  font-size: ${responsiveSize(20)};
  margin-bottom: 50;
`;

export const Button = styled.TouchableOpacity`
  background: #50d890;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${responsiveSize(20)};
  font-weight: bold;
`;
