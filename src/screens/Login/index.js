import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import { SafeAreaContainer } from '../../../globalStyled';
import { Container, Input, Button, ButtonText, Title } from './styles';
import Loader from '../../components/common/Loader';

import api from '../../services/api';

export default function Login(props) {
  const [state, setState] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  async function handleLogin() {
    const { email, password } = state;

    if (!email) {
      showMessage({
        message: 'O email é obrigatório',
        type: 'danger',
        icon: 'auto',
      });
      return;
    }

    if (!password) {
      showMessage({
        message: 'A senha é obrigatória',
        type: 'danger',
        icon: 'auto',
      });
      return;
    }

    setShowLoader(true);

    try {
      const result = await api.post('/auth/authenticate', {
        email: state.email,
        password: state.password,
      });

      await AsyncStorage.setItem('TOKEN', result.data.token);
      props.navigation.navigate('Home');
    } catch (err) {
      let message = '';
      const { status } = err.response;

      if (status === 400) {
        message = 'Usuário não encontrado';
      } else if (status === 401) {
        message = 'Senha incorreta';
      } else {
        message = 'Houve um erro ao processar o login';
      }

      showMessage({
        message: message,
        type: 'danger',
        icon: 'auto',
      });
    }

    setShowLoader(false);
  }

  return (
    <>
      <SafeAreaContainer mode="light">
        <Container>
          <Title>meuamigofitness</Title>
          <Input
            placeholder="Digite seu email"
            autoCapitalize="none"
            onChangeText={text => setState({ ...state, email: text })}
          />
          <Input
            placeholder="Digite sua senha"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={text => setState({ ...state, password: text })}
          />
          <Button onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </Button>

          <Loader status={showLoader} />
        </Container>
      </SafeAreaContainer>
      <FlashMessage position="bottom" />
    </>
  );
}
