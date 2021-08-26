import {theme} from './../../global/theme';
import styled from 'styled-components/native';
import AutoCompleteInput from 'react-native-autocomplete-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from 'react-native';

export const Container = styled.View``;

export const AutoCompleteContainer = styled.View`
  flex-direction: row;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const AutoComplete = styled(AutoCompleteInput).attrs({
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: `${Platform.OS == 'ios'}` ? 10 : 0,
  },
  listContainerStyle: {
    marginHorizontal: 10,
  },
})`
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  border: none;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
`;

export const SampleIcon = styled(Icon)`
  font-size: 20px;
`;
