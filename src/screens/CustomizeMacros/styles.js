import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const InsideView = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
}))`
  flex: 1;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #50d890;
  width: 140;
  text-align: center;
`;

export const NumberInput = styled.TextInput`
  font-size: 20;
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
  font-size: 20;
  font-weight: bold;
`;
