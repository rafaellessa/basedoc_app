import {theme} from './../../global/theme';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface StyledProps {
  hidden: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-horizontal: 30px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
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
  flex: 2;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  height: 40px;
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

export const SampleIcon = styled(Icon)`
  font-size: 20px;
`;
