import React, {useEffect} from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../global/theme';
import {IconItem} from '../Icon';

import {
  AutoComplete,
  AutoCompleteContainer,
  Container,
  SampleIcon,
} from './styles';

interface DataProps {
  name: string;
}
export interface RenderItem {
  item: DataProps;
  index: number;
}

interface AutoCompleteProps {
  data: DataProps[];
  defaultValue: string | undefined;
  onChangeText: (t: string) => void;
  keyExtractor: (t: DataProps) => string;
  renderItem: ({}: RenderItem) => JSX.Element;
  hideResults: boolean;
  placeholder?: string | undefined;
  placeholderTextColor: string;
  keyboardShouldPersistTaps:
    | boolean
    | 'always'
    | 'handeld'
    | 'never'
    | undefined;
  icon?: IconItem;
}

const AutoCompleteInput: React.FC<AutoCompleteProps> = ({
  data,
  defaultValue,
  onChangeText,
  keyExtractor,
  renderItem,
  hideResults,
  placeholder,
  placeholderTextColor,
  keyboardShouldPersistTaps,
  icon,
}) => {
  return (
    <Container>
      <AutoCompleteContainer>
        {icon && <SampleIcon name="building" />}
        <AutoComplete
          data={data}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          flatListProps={{
            keyExtractor: keyExtractor,
            renderItem: renderItem,
          }}
          hideResults={hideResults}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        />
      </AutoCompleteContainer>
    </Container>
  );
};

export default AutoCompleteInput;
