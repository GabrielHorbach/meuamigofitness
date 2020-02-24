import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export default function Loader(props) {
  return (
    <Container>
      {props.status && <ActivityIndicator size="large" color="#50d890" />}
    </Container>
  );
}
