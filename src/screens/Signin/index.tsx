import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../../assets/logo.png';
import AutoCompleteItem from '../../components/AutoCompleteItem';
import Modal from '../../components/Modal';
import {theme} from '../../global/theme';
import {AdministratorActions} from '../../redux/reducers/reducer.administrators';
import {getAdministrators} from '../../redux/selectors/selector.administrators';
import {Administrator} from '../../redux/types/types.administrators';
import {
  AdministratorSelectTitle,
  ButtonContainer,
  ButtonTitle,
  CloseButton,
  CloseButtonTitle,
  Container,
  EnvironmentList,
  FooterContainer,
  FormContainer,
  IconContainer,
  InputContainer,
  ListItem,
  ListItemTitle,
  LogoBaseDoc,
  LogoContainer,
  ModalContent,
  ModalFooterContainer,
  ModalHeaderContainer,
  ModalHeaderTitle,
  ModalListContainer,
  ModalOverlay,
  ModalOverlayContainer,
  SampleIcon,
  SampleInput,
  SearchInput,
  SearchInputClearIcon,
  SelectAdministratorContainer,
  Title,
  TitleContainer,
} from './styles';

interface DataProps {
  name: string;
}

const Signin: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [hideResults, setHideResults] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [administrator, setAdministrator] = useState<Administrator>();
  const [filteredAdministrators, setFilteredAdministrators] = useState<
    DataProps[]
  >([]);
  const [query, setQuery] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  const dispatch = useDispatch();
  const administrators = useSelector(getAdministrators);

  useEffect(() => {
    fetchAdministrators();
  }, []);

  useEffect(() => {
    console.tron.log('administrator selected: ', administrator);
  }, [administrator]);

  const fetchAdministrators = async () => {
    dispatch(AdministratorActions.basedocRequestGetAllAdministrators());
  };

  const handleSearch = (text: string) => {
    const filtered = administrators.filter(item =>
      item.name.match(new RegExp(text, 'i')),
    );

    setFilteredAdministrators(filtered);
  };

  useEffect(() => {
    if (query.length >= 3) {
      handleSearch(query);
    } else if (query === '') {
      setFilteredAdministrators([]);
    }
  }, [query]);

  const handleResetQuery = () => {
    setQuery('');
    setVisibleModal(false);
  };

  const renderItem = ({item}: {item: Administrator}) => (
    <ListItem
      onPress={() => {
        setAdministrator(item);
        handleResetQuery();
      }}>
      <ListItemTitle>{item.name}</ListItemTitle>
    </ListItem>
  );

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
            <AdministratorSelectTitle>
              {administrator ? administrator.name : 'Administradora'}
            </AdministratorSelectTitle>
          </SelectAdministratorContainer>
          <IconContainer onPress={() => setAdministrator(undefined)}>
            <SampleIcon name="close" />
          </IconContainer>
        </InputContainer>
        <ButtonContainer>
          <ButtonTitle>Login</ButtonTitle>
        </ButtonContainer>
        <FooterContainer />
      </FormContainer>
      <Modal
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
        <ModalOverlayContainer>
          <ModalOverlay />
        </ModalOverlayContainer>
        <ModalContent>
          <ModalHeaderContainer>
            <ModalHeaderTitle>Busque uma administradora</ModalHeaderTitle>
          </ModalHeaderContainer>
          <InputContainer>
            <SampleIcon name="building" color={theme.colors.primary} />
            <SearchInput
              placeholder="Administradora"
              value={query}
              defaultValue={administrator?.name}
              onChangeText={text => {
                setQuery(text);
              }}
            />
            <SearchInputClearIcon onPress={() => setQuery('')}>
              <SampleIcon name="close" color={theme.colors.primary} />
            </SearchInputClearIcon>
          </InputContainer>
          <ModalListContainer>
            <EnvironmentList
              data={filteredAdministrators}
              renderItem={renderItem}
              keyExtractor={(item: any) => String(item.entityCode)}
            />
          </ModalListContainer>
          <ModalFooterContainer>
            <CloseButton onPress={() => setVisibleModal(false)}>
              <CloseButtonTitle>Fechar</CloseButtonTitle>
            </CloseButton>
          </ModalFooterContainer>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Signin;
