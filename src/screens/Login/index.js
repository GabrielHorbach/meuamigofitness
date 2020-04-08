import React, { useState, useEffect, useRef } from 'react';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import { SafeAreaContainer } from '../../../globalStyled';
import { Container, Input, Button, ButtonText, Title } from './styles';
import Loader from '../../components/common/Loader';

import api from '../../services/api';

const initialState = {
  email: '',
  password: '',
};

export default function Login(props) {
  const [state, setState] = useState(initialState);
  const [showLoader, setShowLoader] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    async function isUserAlreadyLogged() {
      const userData = JSON.parse(await AsyncStorage.getItem('USER_DATA'));

      if (userData && userData.token) {
        props.navigation.navigate('Home');
      }
    }

    isUserAlreadyLogged();
  }, [props.navigation]);

  async function handleLogin() {
    Keyboard.dismiss();
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

      await AsyncStorage.setItem(
        'USER_DATA',
        JSON.stringify({
          user: result.data.user,
          token: result.data.token,
        }),
      );
      setState(initialState);

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
            value={state.email}
            autoFocus={true}
            keyboardType="email-address"
            returnKeyType={'next'}
            onSubmitEditing={() => inputEl.current.focus()}
            onChangeText={text => setState({ ...state, email: text })}
          />
          <Input
            placeholder="Digite sua senha"
            secureTextEntry={true}
            autoCapitalize="none"
            ref={inputEl}
            value={state.password}
            onChangeText={text => setState({ ...state, password: text })}
            returnKeyType={'go'}
            onSubmitEditing={handleLogin}
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
