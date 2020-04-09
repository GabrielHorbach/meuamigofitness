import React, { useState, useEffect, useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import UserService from '../../services/UserService';
import { Container, Label, NumberInput, Button, ButtonText } from './styles';

const initialState = {
  carbs: 0,
  fat: 0,
  protein: 0,
};

export default function CustomizeMacros({ navigation }) {
  const [state, setState] = useState(initialState);
  const [total, setTotal] = useState(0);

  const sumTotalCalories = useCallback(({ protein, fat, carbs }) => {
    setTotal(4 * protein + 4 * carbs + 9 * fat);
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      const userData = JSON.parse(await AsyncStorage.getItem('USER_DATA'));
      const user = await UserService.getUserData(userData.user._id);

      const macros = {};
      macros.carbs = user.carbs;
      macros.protein = user.protein;
      macros.fat = user.fat;

      setState(macros);
    }

    navigation.addListener('didFocus', () => {
      fetchUserData();
    });
  }, [navigation]);

  useEffect(() => {
    sumTotalCalories(state);
  }, [state, sumTotalCalories]);

  const handlePress = useCallback(async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('USER_DATA'));
    const result = await UserService.updateUser(userData.user._id, {
      ...state,
      calories: total,
    });

    if (result.data) {
      showMessage({
        message: 'Macronutrientes alterados com sucesso!',
        type: 'success',
        icon: 'auto',
      });
    }
  }, [state, total]);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container behavior="padding">
          <Label>Carboidratos</Label>
          <NumberInput
            selectTextOnFocus={true}
            placeholder="Valor em gramas"
            value={String(state.carbs)}
            keyboardType="number-pad"
            onChangeText={value => setState({ ...state, carbs: value })}
            maxLength={10}
          />
          <Label>Proteínas</Label>
          <NumberInput
            selectTextOnFocus={true}
            placeholder="em gramas"
            value={String(state.protein)}
            keyboardType="number-pad"
            onChangeText={value => setState({ ...state, protein: value })}
            maxLength={10}
          />
          <Label>Gorduras</Label>
          <NumberInput
            selectTextOnFocus={true}
            placeholder="em gramas"
            value={String(state.fat)}
            keyboardType="number-pad"
            onChangeText={value => setState({ ...state, fat: value })}
            maxLength={10}
          />
          <Label>Calorias Totais</Label>
          <NumberInput value={String(total)} editable={false} />
          <Button onPress={handlePress}>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </Container>
      </TouchableWithoutFeedback>
      <FlashMessage position="top" />
    </>
  );
}
