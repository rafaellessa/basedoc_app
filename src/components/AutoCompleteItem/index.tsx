import React from 'react';

import {Container, ItemTitle} from './styles';

interface AutoCompleteItemProps {
  title: string;
  onItemPress: () => void;
}

const AutoCompleteItem: React.FC<AutoCompleteItemProps> = ({
  title,
  onItemPress,
}) => {
  return (
    <Container onPress={onItemPress}>
      <ItemTitle>{title}</ItemTitle>
    </Container>
  );
};

export default AutoCompleteItem;
