import {Platform} from 'react-native';
import {theme} from '../../../global/theme';
import styled from 'styled-components/native';
import Icon, {IconItem} from '../../../components/Icon';
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

export const SampleIcon = styled(Icon).attrs(({name, color}: IconItem) => ({
  source: 'FontAwesome',
  name,
  size: 20,
  color: color,
}))``;

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
