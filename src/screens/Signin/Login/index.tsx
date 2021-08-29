import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AdministratorActions} from '../../../redux/reducers/reducer.administrators';
import {getAdministrators} from '../../../redux/selectors/selector.administrators';
import {Administrator} from '../../../redux/types/types.administrators';
import {
  ButtonContainer,
  ButtonTitle,
  Container,
  FooterContainer,
  FormContainer,
  IconContainer,
  InputContainer,
  LogoBaseDoc,
  LogoContainer,
  SafeContainer,
  SampleIcon,
  SampleInput,
  SelectAdministratorContainer,
  Title,
  TitleContainer,
} from './styles';

import Logo from '../../../assets/logo.png';
import {theme} from '../../../global/theme';
import {TouchableOpacity} from 'react-native';
import Modal from './Modal';

const Login: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [hideResults, setHideResults] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [administrator, setAdministrator] = useState<Administrator>();
  const [filteredAdministrators, setFilteredAdministrators] = useState<
    Administrator[]
  >([]);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const administrators = useSelector(getAdministrators);

  useEffect(() => {
    fetchAdministrators();
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      handleSearch(query);
    } else if (query === '') {
      setFilteredAdministrators([]);
      setHideResults(false);
      setAdministrator({} as Administrator);
    }
  }, [query]);

  const handleSearch = (text: string) => {
    const filtered = administrators.filter(item =>
      item.name.match(new RegExp(text, 'i')),
    );

    console.tron.log('Filtereds', filtered);
    setFilteredAdministrators(filtered);
  };

  const fetchAdministrators = async () => {
    dispatch(AdministratorActions.basedocRequestGetAllAdministrators());
  };

  return (
    <>
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
              placeholderTextColor={theme.colors.secondary100}
            />
          </InputContainer>
          <InputContainer>
            <SampleIcon name="lock" />
            <SampleInput
              placeholder="Senha"
              secureTextEntry={hidden}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={theme.colors.secondary100}
            />
            <IconContainer onPress={() => setHidden(!hidden)}>
              <SampleIcon name={hidden ? 'eye' : 'eye-slash'} />
            </IconContainer>
          </InputContainer>
          <InputContainer>
            <SampleIcon name="building" />
            <SelectAdministratorContainer
              onPress={() => setVisibleModal(!visibleModal)}>
              <SampleInput
                placeholder="Administradora"
                secureTextEntry={hidden}
                value={administrator?.name}
                onChangeText={setPassword}
                placeholderTextColor={theme.colors.secondary100}
                editable={false}
              />
            </SelectAdministratorContainer>
            <IconContainer
              onPress={() => setAdministrator({} as Administrator)}>
              <SampleIcon name="close" />
            </IconContainer>
          </InputContainer>
          <ButtonContainer>
            <ButtonTitle>Login</ButtonTitle>
          </ButtonContainer>
          <FooterContainer />
        </FormContainer>
      </Container>
      <Modal
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}
      />
    </>
  );
};

export default Login;
