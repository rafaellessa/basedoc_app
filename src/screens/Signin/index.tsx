import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../../assets/logo.png';
import AutoComplete from '../../components/AutoCompleteInput';
import AutoCompleteItem from '../../components/AutoCompleteItem';
import {theme} from '../../global/theme';
import {AdministratorActions} from '../../redux/reducers/reducer.administrators';
import {getAdministrators} from '../../redux/selectors/selector.administrators';
import {
  Container,
  FormContainer,
  IconContainer,
  InputContainer,
  LogoBaseDoc,
  LogoContainer,
  SafeContainer,
  SampleIcon,
  SampleInput,
  Title,
  TitleContainer,
} from './styles';

interface DataProps {
  name: string;
}

const data = [
  {
    name: 'Rafael Lessa',
  },
  {
    name: 'Rafaela Lessa',
  },
  {
    name: 'Savana',
  },
  {
    name: 'Sophia',
  },
  {
    name: 'Robson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
];

const Signin: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [hideResults, setHideResults] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [administrator, setAdministrator] = useState<DataProps>();
  const [filteredAdministrators, setFilteredAdministrators] = useState<
    DataProps[]
  >([]);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const adm = useSelector(getAdministrators);

  useEffect(() => {
    fetchAdministrators();
    console.tron.log('Admmmmm:> ', adm);
  }, []);

  const fetchAdministrators = async () => {
    dispatch(AdministratorActions.basedocRequestGetAllAdministrators());
  };

  const handleSearch = (text: string) => {
    const filtered = data.filter(item =>
      item.name.match(new RegExp(text, 'i')),
    );

    console.tron.log('Filtereds', filtered);
    setFilteredAdministrators(filtered);
  };

  useEffect(() => {
    if (query.length >= 3) {
      handleSearch(query);
    } else {
      setFilteredAdministrators([]);
      setHideResults(false);
      setAdministrator({} as DataProps);
    }
  }, [query]);

  const renderItem = ({item}: {item: DataProps}) => (
    <AutoCompleteItem
      title={item.name}
      onItemPress={() => {
        setAdministrator(item);
        setHideResults(true);
      }}
    />
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
        <SafeContainer>
          <AutoComplete
            data={filteredAdministrators}
            defaultValue={administrator?.name}
            onChangeText={(text: string) => {
              setQuery(text);
            }}
            keyExtractor={item => String(item.name)}
            renderItem={renderItem}
            hideResults={hideResults}
            placeholder="Administradora"
            placeholderTextColor={theme.colors.secondary100}
            keyboardShouldPersistTaps="always"
            icon={{
              name: 'building',
              source: 'FontAwesome',
              size: 20,
            }}
          />
        </SafeContainer>
      </FormContainer>
    </Container>
  );
};

export default Signin;
