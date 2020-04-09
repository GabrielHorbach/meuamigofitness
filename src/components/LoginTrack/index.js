import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../../globalStyled';
import { LoginTrackText } from './styles';

export default function LoginTrack({ text }) {
  return (
    <Card autoSize background="#f6f6f6" marginBottom="10px">
      <LoginTrackText>{text}</LoginTrackText>
    </Card>
  );
}

LoginTrack.propTypes = {
  text: PropTypes.string,
};
