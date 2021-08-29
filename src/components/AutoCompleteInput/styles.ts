import {theme} from './../../global/theme';
import styled from 'styled-components/native';
import AutoCompleteInput from 'react-native-autocomplete-input';
import {Dimensions, PixelRatio, Platform} from 'react-native';
import Icon, {IconItem} from '../../components/Icon';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

export const Container = styled.View`
  flex: 1;
`;

export const SafeContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const AutoCompleteContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary};
  padding: ${Platform.OS === 'android' ? 0 + 'px' : 10 + 'px'};
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
    left: 30,
    maxWidth: 300,
  },
  listContainerStyle: {
    top: 10,
  },
  containerStyle: {
    flex: 1,
  },
})`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  flex: 1;
`;

export const SampleIcon = styled(Icon).attrs(({name, color}: IconItem) => ({
  source: 'FontAwesome',
  name,
  size: 20,
  color: color,
}))`
  margin-top: 12px;
  margin-left: 10px;
`;
