import React from 'react';

import {
  Container,
  QuantityText,
  UnitText,
  TitleText,
  NutrientCircleView,
} from './styles';

export default function RoundedNutrientInfo({ name, value, unity = 'g' }) {
  return (
    <Container>
      <NutrientCircleView>
        <QuantityText>{value}</QuantityText>
        <UnitText>{unity}</UnitText>
      </NutrientCircleView>
      <TitleText>{name}</TitleText>
    </Container>
  );
}
