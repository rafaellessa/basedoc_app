import React from 'react';
import {ActivityIndicator} from 'react-native';
import {theme} from '../../global/theme';

import {Container} from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Container>
  );
};

export default Loading;
