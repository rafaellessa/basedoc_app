import styled from 'styled-components/native';
import Icon, {IconItem} from '../../../../components/Icon';
import {theme} from '../../../../global/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.Modal``;

export const ModalContent = styled.KeyboardAvoidingView.attrs({
  behavior: `${Platform.OS === 'ios' ? 'padding' : 'height'}`,
})`
  flex: 1;
  margin: 20px;
  padding-horizontal: 15px;
  elevation: 2;
`;

export const ModalOverlayContainer = styled.TouchableWithoutFeedback``;

export const ModalOverlay = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: transparent;
`;

export const HeaderContainer = styled.View`
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 18px;
`;

export const IconContainer = styled.TouchableOpacity``;

export const SampleIcon = styled(Icon).attrs(({name, color}: IconItem) => ({
  source: 'FontAwesome',
  name,
  size: 20,
  color: color,
}))``;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary}
  margin-bottom: 10px;

`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  margin: 0px 5px;
`;

export const ListContainer = styled.View`
  flex: 1;
`;
export const FooterContainer = styled.View`
  padding: 20px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const CloseButtonTitle = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 16px;
`;

export const EnvironmentList = styled.FlatList``;

export const ListItem = styled.TouchableOpacity`
  padding: 10px;

  margin: 5px 0px;
`;

export const ListItemTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
`;
