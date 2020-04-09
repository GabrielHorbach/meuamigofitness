import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const Container = styled.View`
  height: auto;
  align-items: center;
`;

export const NutrientCircleView = styled.View`
  width: ${responsiveSize(6)};
  height: ${responsiveSize(6)};
  border-radius: 35;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
`;

export const QuantityText = styled.Text`
  font-size: ${`${responsiveSize(24)}px`};
  font-weight: 600;
  color: #fff;
`;

export const UnitText = styled.Text`
  font-size: ${`${responsiveSize(30)}px`};
  color: #fff;
`;

export const TitleText = styled.Text`
  font-size: ${`${responsiveSize(30)}px`};
  color: #fff;
  margin-top: 5px;
`;
