import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import AutoCompleteItem from '../../../../components/AutoCompleteItem';
import {getAdministrators} from '../../../../redux/selectors/selector.administrators';
import {Administrator} from '../../../../redux/types/types.administrators';

import {
  HeaderContainer,
  HeaderTitle,
  IconContainer,
  ListContainer,
  ModalContainer,
  ModalContent,
  ModalOverlay,
  ModalOverlayContainer,
  SampleIcon,
  FooterContainer,
  CloseButton,
  CloseButtonTitle,
  InputContainer,
  SearchInput,
  EnvironmentList,
  ListItem,
  ListItemTitle,
} from './styles';

interface ModalProps {
  visible: boolean;
  onRequestClose: () => void;
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
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
  {
    name: 'Rudson Lessa',
  },
];

const Modal: React.FC<ModalProps> = ({visible, onRequestClose}) => {
  const [query, setQuery] = useState('');
  const [filteredAdministrators, setFilteredAdministrators] = useState<
    Administrator[]
  >([] as Administrator[]);
  const [administrator, setAdministrator] = useState<Administrator>();
  const administrators = useSelector(getAdministrators);

  useEffect(() => {
    if (query.length >= 3) {
      handleSearch(query);
    } else if (query === '') {
      setFilteredAdministrators([]);
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

  const renderItem = ({item}: {item: Administrator}) => (
    <ListItem
      onPress={() => {
        setAdministrator(item);
        onRequestClose();
      }}>
      <ListItemTitle>{item.name}</ListItemTitle>
    </ListItem>
  );

  return (
    <ModalContainer
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onRequestClose}>
      <ModalOverlayContainer onPress={onRequestClose}>
        <ModalOverlay />
      </ModalOverlayContainer>
      <ModalContent>
        <HeaderContainer>
          <HeaderTitle>Busque uma administradora</HeaderTitle>
          <IconContainer onPress={onRequestClose}>
            <SampleIcon name="close" />
          </IconContainer>
        </HeaderContainer>
        <InputContainer>
          <SampleIcon name="building" />
          <SearchInput
            placeholder="Administradora"
            value={query}
            defaultValue={administrator?.name}
            onChangeText={text => {
              setQuery(text);
            }}
          />
          <SampleIcon name="close" />
        </InputContainer>
        <ListContainer>
          <EnvironmentList
            data={filteredAdministrators}
            renderItem={renderItem}
            keyExtractor={(item: any) => String(item.entityCode)}
          />
        </ListContainer>
        <FooterContainer>
          <CloseButton onPress={onRequestClose}>
            <CloseButtonTitle>Fechar</CloseButtonTitle>
          </CloseButton>
        </FooterContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
