import {theme} from './../../global/theme';
import styled from 'styled-components/native';
import AutoCompleteInput from 'react-native-autocomplete-input';
import {Platform} from 'react-native';
import Icon, {IconItem} from '../../components/Icon';

export const Container = styled.View``;

export const AutoCompleteContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary};
  padding: 10px;
  flex: 1;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
`;

export const AutoComplete = styled(AutoCompleteInput).attrs({
  inputContainerStyle: {
    borderWidth: 0,
  },
  listContainerStyle: {
    // position: 'absolute',
    // top: 50,
    // //marginTop: `${Platform.OS === 'ios'}` ? 10 : 0,
    // width: 300,
    // backgroundColor: 'lime',
  },
  containerStyle: {
    // height: 40,
    // marginTop: -20,
    // justifyContent: 'flex-start',
  },
  listStyle: {},
})`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  flex: 1;
  width: 250px;
`;

export const SampleIcon = styled(Icon).attrs(({name, color}: IconItem) => ({
  source: 'FontAwesome',
  name,
  size: 20,
  color: color,
}))``;
