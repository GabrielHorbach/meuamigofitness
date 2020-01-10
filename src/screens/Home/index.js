import React from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaContainer, Container, Separator } from '../../../globalStyled';
import { GreetingText, UserWrapper } from './styles';

import MacrosCounter from '../../components/MacrosCounter';
import LoginTrack from '../../components/LoginTrack';

export default function Home({ navigation }) {
  return (
    <SafeAreaContainer mode="light">
      <Container mode="light">
        <UserWrapper>
          <GreetingText>Olá, Gabriel</GreetingText>
          <Icon
            name="user-alt"
            size={20}
            color="#50d890"
            style={styles.icon}
            onPress={() => navigation.navigate('Profile')}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          />
        </UserWrapper>
        <Separator />
        <MacrosCounter />
        <LoginTrack />
      </Container>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  icon: { alignSelf: 'center' },
});
