import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaContainer, Container, Separator } from '../../../globalStyled';
import { GreetingText, UserWrapper } from './styles';

import MacrosCounter from '../../components/MacrosCounter';
import LoginTrack from '../../components/LoginTrack';

import UserService from '../../services/UserService';
import { responsiveSize } from '../../utils/dimensions';

export default function Home({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      const userData = JSON.parse(await AsyncStorage.getItem('USER_DATA'));

      const user = await UserService.getUserData(userData.user._id);

      setData(user);
    }

    navigation.addListener('didFocus', () => {
      fetchUserData();
    });
  }, [navigation]);

  return (
    <SafeAreaContainer mode="light">
      <Container mode="light">
        <UserWrapper>
          <GreetingText>Olá, {data.name}</GreetingText>
          <Icon
            name="user-alt"
            size={responsiveSize(18)}
            color="#50d890"
            style={styles.icon}
            onPress={() => navigation.navigate('Profile')}
            hitSlop={{
              top: 12,
              bottom: 12,
              left: 12,
              right: 12,
            }}
          />
        </UserWrapper>
        <Separator />
        <MacrosCounter data={data} />
        <LoginTrack text="Você fez login por 365 dias seguidos!" />
        <LoginTrack text="Continue assim!" />
      </Container>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  icon: { alignSelf: 'flex-start' },
});
