import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const GreetingText = styled.Text`
  font-size: ${responsiveSize(16)};
  font-weight: 500;
  color: #50d890;
  height: 30;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${responsiveSize(14)};
`;
