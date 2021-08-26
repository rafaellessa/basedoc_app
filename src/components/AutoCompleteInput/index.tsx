import React from 'react';
import {Text} from 'react-native';
import {theme} from '../../global/theme';

import {
  AutoComplete,
  AutoCompleteContainer,
  Container,
  SampleIcon,
} from './styles';

const AutoCompleteInput: React.FC = () => {
  const data = [
    {
      name: 'Rafael Lessa',
    },
    {
      name: 'Savana',
    },
  ];

  return (
    <Container>
      <AutoCompleteContainer>
        <SampleIcon name="building" />
        <AutoComplete
          data={data}
          onChangeText={(text: string) => {
            if (text.length >= 3) {
            }
          }}
          flatListProps={{
            keyExtractor: (_, idx) => idx,
            renderItem: ({item}) => <Text>{item.name}</Text>,
          }}
          hideResults={true}
          placeholder="Administradora"
          placeholderTextColor={theme.colors.primary}
          keyboardShouldPersistTaps="always"
        />
      </AutoCompleteContainer>
    </Container>
  );
};

export default AutoCompleteInput;
