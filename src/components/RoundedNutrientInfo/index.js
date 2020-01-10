import React from 'react';

import {
  Container,
  QuantityText,
  UnitText,
  TitleText,
  NutrientCircleView,
} from './styles';

export default function RoundedNutrientInfo({ data }) {
  return (
    <Container>
      <NutrientCircleView>
        <QuantityText>{data.quantity}</QuantityText>
        <UnitText>{data.unit}</UnitText>
      </NutrientCircleView>
      <TitleText>{data.name}</TitleText>
    </Container>
  );
}
