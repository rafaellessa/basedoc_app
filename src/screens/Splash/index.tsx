import React from 'react';

import {Container, LogoBaseDoc} from './styles';

import {useEffect} from 'react';
import Logo from '../../assets/logo.png';

const Splash: React.FC = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login', {});
    }, 3000);
  }, []);

  return (
    <Container>
      <LogoBaseDoc source={Logo} />
    </Container>
  );
};

export default Splash;
