import React from 'react';

import { Card } from '../../../globalStyled';
import { LoginTrackText } from './styles';

export default function LoginTrack() {
  return (
    <Card background="#f6f6f6">
      <LoginTrackText>
        Você fez login por 365 dias seguidos! Continue assim!
      </LoginTrackText>
    </Card>
  );
}
