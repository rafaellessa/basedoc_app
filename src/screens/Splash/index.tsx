import React from 'react';

import {Container, LogoBaseDoc} from './styles';

import {useEffect} from 'react';
import Logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash: React.FC = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      handleNavigate();
    }, 3000);
  }, []);

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('Files');
    } else {
      navigation.navigate('Signin');
    }
  };

  return (
    <Container>
      <LogoBaseDoc source={Logo} />
    </Container>
  );
};

export default Splash;
