import {Platform} from 'react-native';
import {theme} from '../../global/theme';
import styled from 'styled-components/native';
import Icon, {IconItem} from '../../components/Icon';
interface StyledProps {
  hidden: boolean;
}

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: `${Platform.OS === 'ios' ? 'padding' : 'height'}`,
})`
  flex: 1;
  margin-horizontal: 30px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: ${Platform.OS === 'android' ? 10 + 'px' : 60 + 'px'};
`;

export const LogoBaseDoc = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 300px;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.regular};
`;

export const FormContainer = styled.View`
  flex: 1;
`;

export const SafeContainer = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  padding: 0px 10px;
  height: ${Platform.OS === 'android' ? 40 + 'px' : 40 + 'px'};
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary};
  margin-bottom: 20px;
`;

export const SampleInput = styled.TextInput`
  font-size: 18px;
  font-family: ${theme.fonts.regular};
  flex: 1;
  margin: 0px 10px;
`;

export const IconContainer = styled.TouchableOpacity``;

export const SampleIcon = styled(Icon).attrs(
  ({name, color, size}: IconItem) => ({
    source: 'FontAwesome',
    name,
    size: size ? size : 20,
    color: color,
  }),
)``;

export const FooterContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${theme.colors.primary};
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  color: ${theme.colors.white};
`;

export const SelectAdministratorContainer = styled.TouchableOpacity`
  flex: 1;
  height: 30px;
  justify-content: center;
  padding-left: 10px;
`;

export const AdministratorSelectTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  color: ${theme.colors.secondary100};
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

export const ModalContent = styled.KeyboardAvoidingView.attrs({
  behavior: `${Platform.OS === 'ios' ? 'padding' : 'height'}`,
})`
  flex: 1;
  margin: 20px;
  padding-horizontal: 15px;
  elevation: 2;
`;

export const ModalHeaderContainer = styled.View`
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ModalHeaderTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  color: ${theme.colors.secondary100};
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  margin: 0px 5px;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.secondary100};
`;

export const SearchInputClearIcon = styled.TouchableOpacity``;

export const ModalListContainer = styled.View`
  flex: 1;
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

export const ModalFooterContainer = styled.View`
  padding: 20px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const CloseButtonTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.white};
`;
