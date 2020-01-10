import React from 'react';

import { Card } from '../../../globalStyled';
import { Title, NutrientsContainer } from './styles';

import RoundedNutrientInfo from '../RoundedNutrientInfo';

const fakeData = [
  {
    name: 'Carb',
    quantity: 400,
    unit: 'g',
  },
  {
    name: 'Gorduras',
    quantity: 80,
    unit: 'g',
  },
  {
    name: 'Proteínas',
    quantity: 225,
    unit: 'g',
  },
  {
    name: 'Calorias',
    quantity: 3200,
    unit: 'kcal',
  },
];

export default function MacrosCounter() {
  return (
    <Card background="#50d890" marginBottom="20px">
      <Title>Nutrientes restantes:</Title>
      <NutrientsContainer>
        <RoundedNutrientInfo data={fakeData[0]} />
        <RoundedNutrientInfo data={fakeData[1]} />
        <RoundedNutrientInfo data={fakeData[2]} />
        <RoundedNutrientInfo data={fakeData[3]} />
      </NutrientsContainer>
    </Card>
  );
}
