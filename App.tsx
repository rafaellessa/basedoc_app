import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Stack from './src/navigations/Stack';

const App: React.FC = () => {
  if (__DEV__) {
    import('./ReactoTron').then(() => console.log('Reactotron Configurado'));
  }
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
