import React from 'react';

import { Card } from '../../../globalStyled';
import { Title, NutrientsContainer } from './styles';

import RoundedNutrientInfo from '../RoundedNutrientInfo';

export default function MacrosCounter(props) {
  const { carbs, fat, protein, calories } = props.data;

  return (
    <Card background="#50d890" marginBottom="20px">
      <Title>Nutrientes restantes:</Title>
      <NutrientsContainer>
        <RoundedNutrientInfo name="Carb" value={carbs} />
        <RoundedNutrientInfo name="Gordura" value={fat} />
        <RoundedNutrientInfo name="Proteína" value={protein} />
        <RoundedNutrientInfo name="Calorias" value={calories} unity="kcal" />
      </NutrientsContainer>
    </Card>
  );
}
