import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, SectionHeader, Row, Option } from './styles';

export default function Profile(props) {
  async function handlePress() {
    await AsyncStorage.removeItem('USER_DATA');
    props.navigation.navigate('Login');
  }

  return (
    <Container>
      <SectionHeader>Configurações</SectionHeader>
      <Row>
        <Option onPress={() => props.navigation.navigate('CustomizeMacros')}>
          Personalizar Macronutrientes
        </Option>
      </Row>
      <SectionHeader>Conta</SectionHeader>
      <Row>
        <Option>Alterar Senha</Option>
      </Row>
      <Row>
        <Option onPress={handlePress}>Sair</Option>
      </Row>
    </Container>
  );
}
