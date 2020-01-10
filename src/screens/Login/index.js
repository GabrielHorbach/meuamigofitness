import React from 'react';

import { SafeAreaContainer } from '../../../globalStyled';
import { Container, Input, Button, ButtonText, Title } from './styles';

export default function Login(props) {
  return (
    <SafeAreaContainer mode="light">
      <Container>
        <Title>meuamigofitness</Title>
        <Input placeholder="Digite seu email" autoCapitalize="none" />
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button onPress={() => props.navigation.replace('Home')}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Container>
    </SafeAreaContainer>
  );
}
