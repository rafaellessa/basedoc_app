import styled from 'styled-components/native';
import {theme} from '../../global/theme';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary};
  border-radius: 10px;
`;

export const ItemTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
`;
