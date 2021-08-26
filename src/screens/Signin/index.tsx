import React from 'react';
import {
  Container,
  FormContainer,
  IconContainer,
  SampleIcon,
  InputContainer,
  SampleInput,
  LogoBaseDoc,
  LogoContainer,
  Title,
  TitleContainer,
} from './styles';

import Logo from '../../assets/logo.png';
import {useState} from 'react';
import AutoComplete from '../../components/AutoCompleteInput';

const Signin: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [administrator, setAdministrator] = useState('');

  return (
    <Container>
      <LogoContainer>
        <LogoBaseDoc source={Logo} />
      </LogoContainer>
      <TitleContainer>
        <Title>Olá, seja bem vindo(a) ao app!</Title>
      </TitleContainer>
      <FormContainer>
        <InputContainer>
          <SampleIcon name="user" />
          <SampleInput
            placeholder="Login"
            value={login}
            onChangeText={setLogin}
          />
        </InputContainer>
        <InputContainer>
          <SampleIcon name="lock" />
          <SampleInput
            placeholder="Password"
            secureTextEntry={hidden}
            value={password}
            onChangeText={setPassword}
          />
          <IconContainer onPress={() => setHidden(!hidden)}>
            <SampleIcon name={hidden ? 'eye' : 'eye-slash'} />
          </IconContainer>
        </InputContainer>
        {/* <InputContainer>
          <SampleIcon name="building" />
        </InputContainer> */}
        <AutoComplete />
      </FormContainer>
    </Container>
  );
};

export default Signin;
