import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  InsideView,
  Label,
  NumberInput,
  Button,
  ButtonText,
} from './styles';

const initialState = {
  carbs: 0,
  fat: 0,
  protein: 0,
};

export default function CustomizeMacros() {
  const [state, setState] = useState(initialState);
  const [total, setTotal] = useState(0);

  const sumTotalCalories = useCallback(({ protein, fat, carbs }) => {
    setTotal(4 * protein + 4 * carbs + 9 * fat);
  }, []);

  useEffect(() => {
    sumTotalCalories(state);
  }, [state, sumTotalCalories]);

  return (
    <Container behavior="padding">
      <InsideView keyboardShouldPersistTaps="never" scrollEnabled={false}>
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
        <Button>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </InsideView>
    </Container>
  );
}
