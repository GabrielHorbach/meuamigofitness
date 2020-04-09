import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const Title = styled.Text`
  font-size: ${`${responsiveSize(24)}px`};
  margin-bottom: ${`${responsiveSize(18)}px`};
  color: #fff;
`;

export const NutrientsContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
`;
